"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var color_1 = require('color');
__export(require('./common'));
var TNSFancyAlert = (function () {
    function TNSFancyAlert() {
    }
    TNSFancyAlert.showSuccess = function (title, subTitle, closeBtnTitle, duration, width) {
        TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.SUCCESS, (title || 'Success!'), subTitle, closeBtnTitle, duration, width);
    };
    TNSFancyAlert.showError = function (title, subTitle, closeBtnTitle, duration, width) {
        TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.ERROR, (title || 'Error!'), subTitle, closeBtnTitle, duration, width);
    };
    TNSFancyAlert.showNotice = function (title, subTitle, closeBtnTitle, duration, width) {
        TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.NOTICE, (title || 'Notice'), subTitle, closeBtnTitle, duration, width);
    };
    TNSFancyAlert.showWarning = function (title, subTitle, closeBtnTitle, duration, width) {
        TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.WARNING, (title || 'Warning!'), subTitle, closeBtnTitle, duration, width);
    };
    TNSFancyAlert.showInfo = function (title, subTitle, closeBtnTitle, duration, width) {
        TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.INFO, (title || 'Info'), subTitle, closeBtnTitle, duration, width);
    };
    TNSFancyAlert.showEdit = function (title, subTitle, closeBtnTitle, duration, width) {
        TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.EDIT, (title || 'Edit'), subTitle, closeBtnTitle, duration, width);
    };
    TNSFancyAlert.showWaiting = function (title, subTitle, closeBtnTitle, duration, width) {
        TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.WAITING, (title || 'Waiting...'), subTitle, closeBtnTitle, (duration || 5), width);
    };
    TNSFancyAlert.showQuestion = function (title, subTitle, closeBtnTitle, duration, width) {
        TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.QUESTION, (title || 'Waiting...'), subTitle, (closeBtnTitle || 'Dismiss'), duration, width);
    };
    TNSFancyAlert.showCustomButtonTimer = function (buttonIndex, reverse, imageName, color, title, subTitle, closeBtnTitle, duration, width) {
        var alert = TNSFancyAlert.createAlert(width);
        buttonIndex = buttonIndex || 0;
        reverse = reverse || false;
        title = title || 'Title';
        alert.addTimerToButtonIndexReverse(buttonIndex, reverse);
        TNSFancyAlert.showCustom(alert, imageName, color, title, subTitle, (closeBtnTitle || 'Dismiss'), (duration || 5));
    };
    TNSFancyAlert.showCustomImage = function (imageName, color, title, subTitle, closeBtnTitle, duration, width) {
        var alert = TNSFancyAlert.createAlert(width);
        var image = UIImage.imageNamed(imageName);
        alert.showCustomColorTitleSubTitleCloseButtonTitleDuration(image, new color_1.Color(color).ios, title, subTitle, (closeBtnTitle || 'Ok'), (duration || 0));
    };
    TNSFancyAlert.showCustomButtons = function (buttons, image, color, title, subTitle, closeBtnTitle, duration, width) {
        var alert = TNSFancyAlert.createAlert(width);
        var _loop_1 = function(btn) {
            alert.addButtonActionBlock(btn.label, function () {
                btn.action();
            });
        };
        for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
            var btn = buttons_1[_i];
            _loop_1(btn);
        }
        TNSFancyAlert.showCustom(alert, image, color, title, subTitle, null, duration);
    };
    TNSFancyAlert.showCustomTextAttributes = function (attributionBlock, button, image, color, title, subTitle, closeBtnTitle, duration, width) {
        var alert = TNSFancyAlert.createAlert(width);
        alert.attributedFormatBlock = attributionBlock;
        alert.addButtonActionBlock(button.label, function () {
            button.action();
        });
        TNSFancyAlert.showCustom(alert, image, color, title, subTitle, null, duration);
    };
    TNSFancyAlert.showTextField = function (placeholder, initialValue, button, image, color, title, subTitle, closeBtnTitle, duration, width) {
        var alert = TNSFancyAlert.createAlert(width);
        var textField = alert.addTextField(placeholder);
        if (initialValue)
            textField.text = initialValue;
        alert.addButtonActionBlock(button.label, function () {
            textField.resignFirstResponder();
            button.action(textField.text);
        });
        TNSFancyAlert.showCustom(alert, image, color, title, subTitle, null, duration);
    };
    TNSFancyAlert.showSwitch = function (switchLabel, switchColor, button, image, color, title, subTitle, closeBtnTitle, duration, width) {
        var alert = TNSFancyAlert.createAlert(width);
        var switchView = alert.addSwitchViewWithLabel(switchLabel);
        switchView.tintColor = new color_1.Color(switchColor).ios;
        alert.addButtonActionBlock(button.label, function () {
            button.action(switchView.selected);
        });
        TNSFancyAlert.showCustom(alert, image, color, title, subTitle, null, duration);
    };
    TNSFancyAlert.showCustomView = function (customView, image, color, title, subTitle, closeBtnTitle, duration, width) {
        var alert = TNSFancyAlert.createAlert(width);
        alert.addCustomView(customView);
        TNSFancyAlert.showCustom(alert, image, color, title, subTitle, closeBtnTitle, duration);
    };
    TNSFancyAlert.show = function (type, title, subTitle, closeBtnTitle, duration, width) {
        var alert = TNSFancyAlert.createAlert(width);
        TNSFancyAlert.applyOptions(alert);
        if (typeof closeBtnTitle === 'undefined')
            closeBtnTitle = 'Ok';
        alert[("show" + type + "SubTitleCloseButtonTitleDuration")](title, subTitle, closeBtnTitle, (duration || 0));
    };
    TNSFancyAlert.showCustom = function (alert, image, color, title, subTitle, closeBtnTitle, duration) {
        TNSFancyAlert.applyOptions(alert);
        if (typeof image === 'undefined')
            image = 'nativescript.png';
        if (typeof color === 'undefined')
            color = '#2B33FF';
        if (typeof closeBtnTitle === 'undefined')
            closeBtnTitle = 'Ok';
        if (typeof image === 'string') {
            image = UIImage.imageNamed(image);
        }
        alert.showCustomColorTitleSubTitleCloseButtonTitleDuration(image, new color_1.Color(color).ios, title, subTitle, closeBtnTitle, (duration || 0));
    };
    TNSFancyAlert.applyOptions = function (alert) {
        alert.shouldDismissOnTapOutside = TNSFancyAlert.shouldDismissOnTapOutside;
        if (TNSFancyAlert.hideAnimationType)
            alert.hideAnimationType = TNSFancyAlert.hideAnimationType;
        if (TNSFancyAlert.showAnimationType)
            alert.showAnimationType = TNSFancyAlert.showAnimationType;
        if (TNSFancyAlert.backgroundType)
            alert.backgroundType = TNSFancyAlert.backgroundType;
        if (TNSFancyAlert.customViewColor)
            alert.customViewColor = new color_1.Color(TNSFancyAlert.customViewColor).ios;
        if (TNSFancyAlert.iconTintColor)
            alert.iconTintColor = new color_1.Color(TNSFancyAlert.iconTintColor).ios;
        if (TNSFancyAlert.titleColor)
            alert.labelTitle.textColor = new color_1.Color(TNSFancyAlert.titleColor).ios;
        if (TNSFancyAlert.bodyTextColor)
            alert.viewText.textColor = new color_1.Color(TNSFancyAlert.bodyTextColor).ios;
        alert.tintTopCircle = TNSFancyAlert.tintTopCircle;
        if (TNSFancyAlert.cornerRadius)
            alert.cornerRadius = TNSFancyAlert.cornerRadius;
        if (TNSFancyAlert.backgroundViewColor)
            alert.backgroundViewColor = new color_1.Color(TNSFancyAlert.backgroundViewColor).ios;
        alert.useLargerIcon = TNSFancyAlert.useLargerIcon;
        if (TNSFancyAlert.soundURL)
            alert.soundURL = NSURL.fileURLWithPath(NSBundle.mainBundle().resourcePath + "/" + TNSFancyAlert.soundURL);
    };
    TNSFancyAlert.createAlert = function (width) {
        if (width) {
            return SCLAlertView.alloc().initWithNewWindowWidth(width);
        }
        else {
            return SCLAlertView.alloc().initWithNewWindow();
        }
    };
    TNSFancyAlert.SUPPORTED_TYPES = {
        SUCCESS: 'Success',
        ERROR: 'Error',
        NOTICE: 'Notice',
        WARNING: 'Warning',
        INFO: 'Info',
        EDIT: 'Edit',
        WAITING: 'Waiting',
        QUESTION: 'Question'
    };
    TNSFancyAlert.shouldDismissOnTapOutside = false;
    TNSFancyAlert.HIDE_ANIMATION_TYPES = {
        FadeOut: SCLAlertViewHideAnimation.FadeOut,
        SlideOutToBottom: SCLAlertViewHideAnimation.SlideOutToBottom,
        SlideOutToTop: SCLAlertViewHideAnimation.SlideOutToTop,
        SlideOutToLeft: SCLAlertViewHideAnimation.SlideOutToLeft,
        SlideOutToRight: SCLAlertViewHideAnimation.SlideOutToRight,
        SlideOutToCenter: SCLAlertViewHideAnimation.SlideOutToCenter,
        SlideOutFromCenter: SCLAlertViewHideAnimation.SlideOutFromCenter
    };
    TNSFancyAlert.SHOW_ANIMATION_TYPES = {
        FadeIn: SCLAlertViewShowAnimation.FadeIn,
        SlideInFromBottom: SCLAlertViewShowAnimation.SlideInFromBottom,
        SlideInFromTop: SCLAlertViewShowAnimation.SlideInFromTop,
        SlideInFromLeft: SCLAlertViewShowAnimation.SlideInFromLeft,
        SlideInFromRight: SCLAlertViewShowAnimation.SlideInFromRight,
        SlideInFromCenter: SCLAlertViewShowAnimation.SlideInFromCenter,
        SlideInToCenter: SCLAlertViewShowAnimation.SlideInToCenter
    };
    TNSFancyAlert.BACKGROUND_TYPES = {
        Shadow: SCLAlertViewBackground.Shadow,
        Blur: SCLAlertViewBackground.Blur,
        Transparent: SCLAlertViewBackground.Transparent
    };
    TNSFancyAlert.tintTopCircle = true;
    TNSFancyAlert.useLargerIcon = false;
    return TNSFancyAlert;
}());
exports.TNSFancyAlert = TNSFancyAlert;
//# sourceMappingURL=fancyalert.js.map