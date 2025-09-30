package io.sona.ncc;

import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsCompat.Type;
import androidx.core.view.WindowInsetsControllerCompat;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // ✅ Window setup
        Window window = getWindow();
        window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
        window.setStatusBarColor(getResources().getColor(com.getcapacitor.android.R.color.colorPrimaryDark));
        window.setNavigationBarColor(getResources().getColor(com.getcapacitor.android.R.color.colorPrimaryDark));

        // ✅ Handle window insets (status bar, nav bar, keyboard)
        View rootView = window.getDecorView();
        ViewCompat.setOnApplyWindowInsetsListener(rootView, (view, insets) -> {
            WindowInsetsCompat windowInsets = insets;

            int left = windowInsets.getInsets(Type.systemBars() | Type.displayCutout()).left;
            int top = windowInsets.getInsets(Type.systemBars() | Type.displayCutout()).top;
            int right = windowInsets.getInsets(Type.systemBars() | Type.displayCutout()).right;
            int bottom = windowInsets.getInsets(Type.systemBars() | Type.displayCutout()).bottom;

            boolean imeVisible = windowInsets.isVisible(Type.ime());
            int imeHeight = windowInsets.getInsets(Type.ime()).bottom;

            view.setPadding(left, top, right, imeVisible ? imeHeight : bottom);
            return insets;
        });

        WindowInsetsControllerCompat insetsController =
                ViewCompat.getWindowInsetsController(window.getDecorView());
        if (insetsController != null) {
            insetsController.setAppearanceLightStatusBars(false);
            insetsController.setAppearanceLightNavigationBars(false);
        }
    }
}
