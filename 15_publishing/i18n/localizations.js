/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Publishing",
		"%l_lessontitle": "Publishing",
		"%l_subtitle": "Titanium Certified Developer (TCD) Training",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(30 mins teaching, 30 mins for lab)",
		"%l_agenda_title": "Agenda",
		
		"%l_agenda1": "Learn the steps for publishing to the Android Market",
		"%l_agenda2": "Learn the steps for publishing to the AppStore",
		"%l_agenda3": "Compare options for AdHoc, Enterprise, and private distribution of iOS apps",
		"%l_android_market": "Google Play",
		"%l_android_play": "(formerly the Android Market)",
		"%l_slidenote_android_market": "",

		"%l_android_dep_release": "Android deployment for release",
		"%l_android_release_image": "<img src='images/android-dep-release.png' style='margin-top:50px;height:400px;'/>",
		"%l_slidenote_android_dep_release": "Steps of Android release process &mdash; don't go into depth here",

		"%l_android_market_reqs": "Android Market requirements",
		"%l_google_acc": "Google account",
		"%l_android_dev_acc": "Android Developer account",
		"%l_one_time_fee": "One-time fee",
		"%l_sdk_tools": "SDK tools: keytool, jarsigner, zipalign",
		"%l_slidenote_android_market_reqs": "Need a Google account (Gmail, Google Docs)<br>Sign up at market.android.com/publish<br>One-time $25 fee<br>Need an Google Checkout Account if you'll be selling your app for a fee<br>Studio provides graphical interface to command-line tools. But you still might need to use the SDK tools, such as to verify APK file",

		"%l_gen_key_pair": "Generate key pair and certificate",
		"%l_gen_keypair_image": "<img src='images/gen-key-pair.png' style='margin-top:50px;height:480px;'/>",
		"%l_slidenote_gen_key_pair": "When you choose to Distribute to the Android Market, Studio provides this dialog for creating a certificate pair and keystore.<br/>Used to have to do this with the <code>keytool</code> command<br>Alias varies and is specific to your app<br>Can store multiple certificates in the same keystore<br>Make backup copies of your keystore file and save in safe location",

		"%l_verify_keystore": "Verify keystore",
		"%l_verify_keystore_image": "<img src='images/verify-keystore.png' style='margin-top:50px;height:450px;'/>",
		"%l_slidenote_verify_keystore": "Point out keytool command<br>>Optional step, but you should do it anyway<br>If you lose the keystore or it's invalid, you won't be able to issue updates in the market<br/>Point out keytool command<br>Want to see 'Valid From' and date 25 years from now or longer",

		"%l_sign_app": "Sign your application",
		"%l_sign_app_image": "<img src='images/sign-app.png' style='margin-top:50px;height:450px;'/>",
		"%l_slidenote_sign_app": "From Deploy menu, choose Distribute &mdash; Android<br>You'll specify your keystore location, password, and alias",

		"%l_verify_signed": "Verify signed app",
		"%l_verify_signed_image": "<img src='images/verify-signed.png' style='margin-top:50px;height:450px;'/>",
		"%l_slidenote_verify_signed": "Again, this is optional but recommended<br/>Use <code>jarsigner</code> to verify apk file<br>Looking for 'jar verified'<br>Might need to use zipalign tool. Android.com site will inform you if you do.<br>Shouldn't be needed after Titanium 1.4",

		"%l_upload_publish": "Uploading and publishing",
		"%l_upload_publish_image": "<img src='images/upload-publish.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_upload_publish": "Upload at market.android.com/pubish<br>Some required info<br>Rest optional<br>Free or set price if you have Google Checkout account",

		"%l_itunes_store": "iTunes AppStore",
		"%l_slidenote_itunes_store": "",

		"%l_itunesgraphics": "iTunes Graphics Required",
		"%l_itunesgraphics1": "At least one screenshot per device type your app supports",
		"%l_itunesgraphics2": "A 1024 x 1024 app icon",
		"%l_itunesgraphics3": "App icons, launch images, supporting graphics appropriate for the devices your app supports",
		"%l_itunesgraphicspara": "See <a href='http://appcel.us/e9RqM' target='_blank'>http://appcel.us/e9RqM</a> for complete list",
		"%l_slidenote_itunesgraphics": "For example, for iPhone, you'll need iPhone4 &amp; iPhone5 sized screens, the large icon, plus launch images, iTunesArtwork file, and appicons in various sizes.",

		"%l_ios_dep_release": "iOS deployment for release",
		"%l_ios_dep_release_image": "<img src='images/ios-dep-release.png' style='margin-top:50px;height:350px;'/>",
		"%l_slidenote_ios_dep_release": "Similar steps for release as testing<br>Done two steps already",

		"%l_ios_distr_certificate": "Distribution certificate",
		"%l_l_ios_distr_certificate_image": "<img src='images/ios-distr-certificate.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_ios_distr_certificate": "App needs to be signed with distribution certificate to be submitted to App Store<br>Corporate / team environment:<br>  - each developer creates their own CSR/Developer certificate<br>  - team manager creates distinct CSR/Distribution certificate<br>  - developer certs can be revoked without affecting other developers or distribution<br><br>Individual developers <br>  - can re-use development CSR to create distribution certificate<br>  - could create new if you'd like<br>Must be logged in as Agent role (one per developer account) to create<br>Install to keychain on machine that will be used for final build",

		"%l_ios_distr_profile": "Distribution Provisioning Profile",
		"%l_l_ios_distr_profile_image": "<img src='images/ios-distr-profile.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_ios_distr_profile": "Not tied to specific devices<br>Required for App Store submission<br>Download the resulting mobileprovision file",

		"%l_ios_install_profile": "Build for Distribution",
		"%l_l_ios_install_profile_image": "<img src='images/ios-install-prov-profile.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_ios_install_profile": "Install into Ti Developer<br>- Upload button installs to Xcode or do separately<br>Should recognize certificates in your keychain<br>Package button builds your app, embeds the certificates, and creates IPA that you'll upload to the App Store",

		"%l_itunes_connect": "iTunes Connect",
		"%l_portal": "Portal for application management",
		"%l_sales_stats": "Sales statistics",
		"%l_contracts": "Contracts, taxes, payments, banking connections",
		"%l_need_to": "Need to create application within iTunes Connect",
		"%l_slidenote_itunes_connect": "",

		"%l_ios_app_itunes_connect": "Creating an app in iTunes Connect",
		"%l_itunesconnect_image": "<img src='images/itunes-connect.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_ios_app_itunes_connect": "Bundle ID and suffix must match what you enter in Ti Studio<br>Step through series of pages to define price, content rating, etc.<br>You'll need a 512x512 icon and at least one screenshot",

		"%l_validate_upload": "Validating and uploading",
		"%l_validateupload_image": "<img src='images/validate-upload.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_validate_upload": "Xcode organizer, Archives window<br>Validate app &mdash; checks for app in iTunes Connect, required graphic assets, signing, etc.<br>Click Validate to validate the app and its configuration on the AppStore<br/>Click Submit - to submit. You can also upload using the Application Loader (in Developer/Applications/Utilities folder)",

		"%l_app_store_reqsv2": "App Store Review Requirements",
		"%l_many_reqs": "Many requirements &mdash; see iOS Dev Center for full details",
		"%l_must_be": "Must be useful, well-designed, run without errors",
		"%l_no_download": "No downloading code",
		"%l_you_must": "You must own trademarks",
		"%l_no_hidden": "No hidden features, use of non-public APIs",
		"%l_slidenote_app_store_reqs": "Feel free to describe relevant experiences",

		"%l_adhoc_distr": "Ad Hoc distribution",
		"%l_distr_outside": "Distribute outside of App Store (e.g. TestFlight)",
		"%l_limited_to": "Limited to running on your registered devices",
		"%l_adhoc": "Ad Hoc builds expire after 90 days",
		"%l_deploy_by": "Deploy by email, over-the-air framework, USB install",
		"%l_slidenote_adhoc_distr": "imited to 100 devices per year",

		"%l_enterprise_distr": "Enterprise distribution",
		"%l_inhouse": "In-house distribution program",
		"%l_distr_to": "Distribute to employees or members",
		"%l_register_as": "Register as company or organization, DUNS number required",
		"%l_slidenote_enterprise_distr": "",

		"%l_qa": "Q&A",
		"%l_slidenote_qa": "",

	}});
