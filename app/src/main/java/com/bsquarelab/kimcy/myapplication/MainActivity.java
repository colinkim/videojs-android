package com.bsquarelab.kimcy.myapplication;

import android.content.Context;
import android.content.Intent;
import android.graphics.Point;
import android.net.Uri;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Display;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private static final String TAG = MainActivity.class.getSimpleName();

    WebView wv;
    String ytUrl;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        wv = findViewById(R.id.webview);
       // wv.setWebChromeClient(new WebChromeClient());
        wv.setWebViewClient(new MyWebViewClient());

        WebSettings webSetting = wv.getSettings();
        webSetting.setJavaScriptEnabled(true);

        wv.addJavascriptInterface(new WebAppInterface(this),"AndroidFunction"); //액션을 처리

       // wv.loadUrl("file:///android_asset/index.html"); //inde.html 에서 화면 및 액션을 호출


        //wv.loadUrl("http://vjs.zencdn.net/v/oceans.mp4");

        ytUrl = "http://vjs.zencdn.net/v/oceans.mp4";

       // wv.loadUrl("file:///android_asset/main6.html"); //inde.html 에서 화면 및 액션을 호출
        wv.loadUrl("file:///android_asset/playlist5.html"); //inde.html 에서 화면 및 액션을 호출

        getDisplayInfo();

    }

    private void getDisplayInfo() {
        Display display = getWindowManager().getDefaultDisplay();
        Point size = new Point();
        display.getSize(size);
        int width = size.x;
        int height = size.y;

        Log.e(TAG," width = "+width + " height = "+height );
    }

    public void timeEvent(View view) {

    }


    public class WebAppInterface {
        Context mContext;

        /** Instantiate the interface and set the context */
        WebAppInterface(Context c) {
            mContext = c;
        }

        /** Show a toast from the web page */
        @JavascriptInterface
        public void showToast(String toast) {
            Toast.makeText(mContext, toast, Toast.LENGTH_SHORT).show();
        }

        public void openAndroidDialog() {
            AlertDialog.Builder myDialog = new AlertDialog.Builder(
                    MainActivity.this);
            myDialog.setTitle("Notice");
            myDialog.setMessage("Android side has been called");
            myDialog.setPositiveButton("ON", null);
            myDialog.show();
        }

        public void getDisplayInfo(){

        }
    }

    private class MyWebViewClient extends WebViewClient {
        boolean calledOnce;

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            return false;
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            Log.d(TAG ,"onPageFinished = "+calledOnce);

            if (calledOnce == false) {
                wv.loadUrl("javascript:callFromActivity(\"" + ytUrl
                        + "\")");
            }
            calledOnce = true;

          //  wv.loadUrl("file:///android_asset/main.html"); //inde.html 에서 화면 및 액션을 호출
        }



    }


}


    /*private class VideoClient extends WebChromeClient {
        @Override
        public void onProgressChanged(WebView view, int newProgress) {
            super.onProgressChanged(view, newProgress);
        }
    }*/

