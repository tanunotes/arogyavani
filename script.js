console.log("Script loaded!");

// State
let appState = {
  userType: null,
  language: "en",
  darkMode: false,
  reminders: [],
  caregiverPhone: "",
};

// Language codes
const languageCodes = {
  en: "en-IN",
  hi: "hi-IN",
  te: "te-IN",
  ta: "ta-IN",
  bn: "bn-IN",
  mr: "mr-IN",
  gu: "gu-IN",
  kn: "kn-IN",
  ml: "ml-IN",
  pa: "pa-IN",
};

// Translations
const translations = {
  en: {
    selectUserTitle: "Select User Type",
    caregiverBtn: "👨‍⚕ Caregiver / Family",
    patientBtn: "🤒 Patient",
    caregiverInfo:
      "You are in Caregiver mode. Add medicine reminders for your patient.",
    patientInfo: "Patient mode activated. Listen for voice reminders!",
    addReminderTitle: "Add Medicine Reminder",
    labelMedicine: "Medicine Name",
    labelDosage: "Dosage",
    labelTime: "Time",
    labelFrequency: "Frequency",
    labelCaregiverPhone: "Caregiver Phone Number (for alerts)",
    remindersTitle: "All Reminders",
    noReminders: "No reminders added yet. Add your first reminder above!",
    activeRemindersTitle: "Your Medicine Reminders",
    noActiveReminders:
      "No active reminders. Your caregiver will add them for you.",
    voiceCommandTitle: "Voice Command",
    voiceInstructions:
      'Press the microphone and say: "TAKEN" | "SNOOZE" | "HELP"',
    quickActionsTitle: "Quick Actions",
    speakAllBtn: "🔊 Read All Reminders",
    emergencyBtn: "🚨 Emergency Call",
    itsTimeTake: "It is time to take",
    dosageIs: "Dosage is",
    sayTaken: "Say TAKEN if you took the medicine",
    saySnooze: "Say SNOOZE to remind later",
    sayHelp: "Say HELP if you missed or need assistance",
    reminderAdded: "Reminder added successfully",
    markedTaken: "Medicine marked as taken",
    snoozed: "Reminder snoozed for 10 minutes",
    caregiverNotified: "Caregiver notified via SMS",
    fillAllFields: "Please fill all fields",
    deleted: "Reminder deleted",
    taken: "✅ Taken",
    pending: "⏰ Pending",
    delete: "🗑 Delete",
    markTaken: "✅ Mark Taken",
    snooze: "⏰ Snooze 10 min",
    notifyCaregiver: "📞 Call Caregiver",
  },
  hi: {
    selectUserTitle: "उपयोगकर्ता प्रकार चुनें",
    caregiverBtn: "👨‍⚕ देखभालकर्ता / परिवार",
    patientBtn: "🤒 रोगी",
    caregiverInfo: "आप देखभालकर्ता मोड में हैं।",
    patientInfo: "रोगी मोड सक्रिय।",
    addReminderTitle: "दवा रिमाइंडर जोड़ें",
    labelMedicine: "दवा का नाम",
    labelDosage: "खुराक",
    labelTime: "समय",
    labelFrequency: "आवृत्ति",
    labelCaregiverPhone: "देखभालकर्ता फोन नंबर",
    remindersTitle: "सभी रिमाइंडर",
    noReminders: "अभी तक कोई रिमाइंडर नहीं।",
    activeRemindersTitle: "आपकी दवा रिमाइंडर",
    noActiveReminders: "कोई सक्रिय रिमाइंडर नहीं।",
    voiceCommandTitle: "आवाज कमांड",
    voiceInstructions: 'माइक्रोफोन दबाएं: "लिया" | "बाद में" | "मदद"',
    quickActionsTitle: "त्वरित क्रियाएं",
    speakAllBtn: "🔊 सभी रिमाइंडर पढ़ें",
    emergencyBtn: "🚨 आपातकालीन कॉल",
    itsTimeTake: "अब समय है",
    dosageIs: "खुराक है",
    sayTaken: "लिया कहें",
    saySnooze: "बाद में कहें",
    sayHelp: "मदद कहें",
    reminderAdded: "रिमाइंडर जोड़ा गया",
    markedTaken: "दवा ली गई",
    snoozed: "10 मिनट स्नूज",
    caregiverNotified: "देखभालकर्ता को सूचित किया गया",
    fillAllFields: "सभी फ़ील्ड भरें",
    deleted: "रिमाइंडर हटाया गया",
    taken: "✅ लिया",
    pending: "⏰ बाकी",
    delete: "🗑 हटाएं",
    markTaken: "✅ लिया",
    snooze: "⏰ 10 मिनट",
    notifyCaregiver: "📞 कॉल करें",
  },
  te: {
    selectUserTitle: "వినియోగదారు రకం ఎంచుకోండి",
    caregiverBtn: "👨‍⚕ సంరక్షకుడు",
    patientBtn: "🤒 రోగి",
    caregiverInfo: "మీరు సంరక్షకుడు మోడ్‌లో ఉన్నారు।",
    patientInfo: "రోగి మోడ్ సక్రియం.",
    addReminderTitle: "మందు రిమైండర్ జోడించండి",
    labelMedicine: "మందు పేరు",
    labelDosage: "మోతాదు",
    labelTime: "సమయం",
    labelFrequency: "ఫ్రీక్వెన్సీ",
    labelCaregiverPhone: "సంరక్షకుడి ఫోన్",
    remindersTitle: "అన్ని రిమైండర్లు",
    noReminders: "రిమైండర్లు లేవు।",
    activeRemindersTitle: "మీ మందు రిమైండర్లు",
    noActiveReminders: "చురుకైన రిమైండర్లు లేవు।",
    voiceCommandTitle: "వాయిస్ కమాండ్",
    voiceInstructions: 'మైక్రోఫోన్: "తీసుకున్నాను" | "తర్వాత" | "సహాయం"',
    quickActionsTitle: "త్వరిత చర్యలు",
    speakAllBtn: "🔊 అన్నీ చదవండి",
    emergencyBtn: "🚨 అత్యవసర కాల్",
    itsTimeTake: "ఇప్పుడు సమయం",
    dosageIs: "మోతాదు",
    sayTaken: "తీసుకున్నాను చెప్పండి",
    saySnooze: "తర్వాత చెప్పండి",
    sayHelp: "సహాయం చెప్పండి",
    reminderAdded: "రిమైండర్ జోడించబడింది",
    markedTaken: "మందు తీసుకున్నారు",
    snoozed: "10 నిమిషాలు స్నూజ్",
    caregiverNotified: "సంరక్షకుడికి తెలియజేయబడింది",
    fillAllFields: "అన్ని ఫీల్డ్‌లు పూరించండి",
    deleted: "రిమైండర్ తొలగించబడింది",
    taken: "✅ తీసుకున్నారు",
    pending: "⏰ పెండింగ్",
    delete: "🗑 తొలగించు",
    markTaken: "✅ తీసుకున్నారు",
    snooze: "⏰ 10 నిమిషాలు",
    notifyCaregiver: "📞 కాల్ చేయండి",
  },
  ta: {
    selectUserTitle: "பயனர் வகை தேர்வு",
    caregiverBtn: "👨‍⚕ பராமரிப்பாளர்",
    patientBtn: "🤒 நோயாளி",
    caregiverInfo: "நீங்கள் பராமரிப்பாளர் பயன்முறையில் உள்ளீர்கள்।",
    patientInfo: "நோயாளி பயன்முறை செயல்படுத்தப்பட்டது।",
    addReminderTitle: "மருந்து நினைவூட்டல் சேர்க்கவும்",
    labelMedicine: "மருந்து பெயர்",
    labelDosage: "அளவு",
    labelTime: "நேரம்",
    labelFrequency: "அடிக்கடி",
    labelCaregiverPhone: "பராமரிப்பாளர் தொலைபேசி",
    remindersTitle: "அனைத்து நினைவூட்டல்கள்",
    noReminders: "நினைவூட்டல்கள் இல்லை।",
    activeRemindersTitle: "உங்கள் மருந்து நினைவூட்டல்கள்",
    noActiveReminders: "செயலில் உள்ள நினைவூட்டல்கள் இல்லை।",
    voiceCommandTitle: "குரல் கட்டளை",
    voiceInstructions: 'மைக்ரோஃபோன்: "எடுத்தேன்" | "பிறகு" | "உதவி"',
    quickActionsTitle: "விரைவு செயல்கள்",
    speakAllBtn: "🔊 அனைத்தையும் படிக்கவும்",
    emergencyBtn: "🚨 அவசர அழைப்பு",
    itsTimeTake: "இப்போது நேரம்",
    dosageIs: "அளவு",
    sayTaken: "எடுத்தேன் சொல்லுங்கள்",
    saySnooze: "பிறகு சொல்லுங்கள்",
    sayHelp: "உதவி சொல்லுங்கள்",
    reminderAdded: "நினைவூட்டல் சேர்க்கப்பட்டது",
    markedTaken: "மருந்து எடுக்கப்பட்டது",
    snoozed: "10 நிமிடங்கள் ஒத்திவை",
    caregiverNotified: "பராமரிப்பாளருக்கு தெரிவிக்கப்பட்டது",
    fillAllFields: "அனைத்து புலங்களையும் நிரப்பவும்",
    deleted: "நினைவூட்டல் நீக்கப்பட்டது",
    taken: "✅ எடுத்தது",
    pending: "⏰ நிலுவை",
    delete: "🗑 நீக்கு",
    markTaken: "✅ எடுத்தது",
    snooze: "⏰ 10 நிமிடம்",
    notifyCaregiver: "📞 அழைக்கவும்",
  },
};

// Initialize on page load
window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing...");
  init();
});

function init() {
  console.log("Initializing app...");
  loadFromStorage();
  attachEventListeners();
  updateTranslations();
  startReminderChecker();
  requestNotificationPermission();
}

function loadFromStorage() {
  try {
    appState.darkMode = JSON.parse(localStorage.getItem("darkMode") || "false");
    appState.language = localStorage.getItem("language") || "en";
    appState.reminders = JSON.parse(localStorage.getItem("reminders") || "[]");
    appState.caregiverPhone = localStorage.getItem("caregiverPhone") || "";

    if (appState.darkMode) {
      document.body.classList.add("dark-mode");
    }

    document.getElementById("language-select").value = appState.language;
    document.getElementById("caregiver-phone").value = appState.caregiverPhone;
  } catch (error) {
    console.error("Error loading from storage:", error);
  }
}

function saveToStorage() {
  try {
    localStorage.setItem("darkMode", JSON.stringify(appState.darkMode));
    localStorage.setItem("language", appState.language);
    localStorage.setItem("reminders", JSON.stringify(appState.reminders));
    localStorage.setItem("caregiverPhone", appState.caregiverPhone);
  } catch (error) {
    console.error("Error saving to storage:", error);
  }
}

function attachEventListeners() {
  console.log("Attaching event listeners...");

  const themeToggle = document.getElementById("theme-toggle");
  const backBtn = document.getElementById("back-btn");
  const languageSelect = document.getElementById("language-select");
  const caregiverBtn = document.getElementById("caregiver-btn");
  const patientBtn = document.getElementById("patient-btn");
  const addReminderBtn = document.getElementById("add-reminder-btn");
  const voiceBtn = document.getElementById("voice-btn");
  const speakAllBtn = document.getElementById("speak-all-btn");
  const emergencyBtn = document.getElementById("emergency-btn");

  if (themeToggle) {
    themeToggle.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Theme toggle clicked");
      toggleTheme();
    });
  }

  if (backBtn) {
    backBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Back button clicked");
      goBack();
    });
  }

  if (languageSelect) {
    languageSelect.addEventListener("change", function (e) {
      console.log("Language changed to:", e.target.value);
      changeLanguage();
    });
  }

  if (caregiverBtn) {
    caregiverBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Caregiver button clicked");
      selectUserType("caregiver");
    });
  }

  if (patientBtn) {
    patientBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Patient button clicked");
      selectUserType("patient");
    });
  }

  if (addReminderBtn) {
    addReminderBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Add reminder button clicked");
      addReminder();
    });
  }

  if (voiceBtn) {
    voiceBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Voice button clicked");
      startVoiceRecognition();
    });
  }

  if (speakAllBtn) {
    speakAllBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Speak all button clicked");
      speakAllReminders();
    });
  }

  if (emergencyBtn) {
    emergencyBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Emergency button clicked");
      emergencyCall();
    });
  }
}

function toggleTheme() {
  console.log("Toggling theme. Current:", appState.darkMode);
  appState.darkMode = !appState.darkMode;
  document.body.classList.toggle("dark-mode");
  saveToStorage();
  console.log("Theme toggled. New:", appState.darkMode);
}

function changeLanguage() {
  appState.language = document.getElementById("language-select").value;
  saveToStorage();
  updateTranslations();
  console.log("Language changed to:", appState.language);
}

function updateTranslations() {
  const t = translations[appState.language] || translations.en;

  document.getElementById("select-user-title").textContent = t.selectUserTitle;
  document.getElementById("caregiver-info").textContent = t.caregiverInfo;
  document.getElementById("patient-info").textContent = t.patientInfo;
  document.getElementById("add-reminder-title").textContent =
    t.addReminderTitle;
  document.getElementById("label-medicine").textContent = t.labelMedicine;
  document.getElementById("label-dosage").textContent = t.labelDosage;
  document.getElementById("label-time").textContent = t.labelTime;
  document.getElementById("label-frequency").textContent = t.labelFrequency;
  document.getElementById("label-caregiver-phone").textContent =
    t.labelCaregiverPhone;
  document.getElementById("reminders-title").textContent = t.remindersTitle;
  document.getElementById("no-reminders").textContent = t.noReminders;
  document.getElementById("active-reminders-title").textContent =
    t.activeRemindersTitle;
  document.getElementById("no-active-reminders").textContent =
    t.noActiveReminders;
  document.getElementById("voice-command-title").textContent =
    t.voiceCommandTitle;
  document.getElementById("voice-instructions").innerHTML = t.voiceInstructions;
  document.getElementById("quick-actions-title").textContent =
    t.quickActionsTitle;
}

function selectUserType(type) {
  console.log("Selecting user type:", type);
  appState.userType = type;

  document.getElementById("user-selection").classList.add("hidden");
  document.getElementById("language-section").classList.add("hidden");
  document.getElementById("back-btn").classList.remove("hidden");

  if (type === "caregiver") {
    document.getElementById("caregiver-panel").classList.remove("hidden");
    document.getElementById("patient-panel").classList.add("hidden");
    renderCaregiverReminders();
  } else {
    document.getElementById("patient-panel").classList.remove("hidden");
    document.getElementById("caregiver-panel").classList.add("hidden");
    renderPatientReminders();
  }
}

function goBack() {
  console.log("Going back");
  appState.userType = null;

  document.getElementById("caregiver-panel").classList.add("hidden");
  document.getElementById("patient-panel").classList.add("hidden");
  document.getElementById("back-btn").classList.add("hidden");
  document.getElementById("user-selection").classList.remove("hidden");
  document.getElementById("language-section").classList.remove("hidden");
}

function addReminder() {
  const t = translations[appState.language] || translations.en;

  const medicineName = document.getElementById("medicine-name").value.trim();
  const dosage = document.getElementById("dosage").value.trim();
  const time = document.getElementById("reminder-time").value;
  const frequency = document.getElementById("frequency").value;

  console.log("Adding reminder:", { medicineName, dosage, time, frequency });

  if (!medicineName || !dosage || !time) {
    alert(t.fillAllFields);
    return;
  }

  const reminder = {
    id: Date.now(),
    medicineName,
    dosage,
    time,
    frequency,
    taken: false,
    createdAt: new Date().toISOString(),
  };

  appState.reminders.push(reminder);
  appState.caregiverPhone = document
    .getElementById("caregiver-phone")
    .value.trim();
  saveToStorage();

  document.getElementById("medicine-name").value = "";
  document.getElementById("dosage").value = "";
  document.getElementById("reminder-time").value = "";

  speak(t.reminderAdded);
  renderCaregiverReminders();
  console.log("Reminder added successfully");
}

function renderCaregiverReminders() {
  const t = translations[appState.language] || translations.en;
  const listElement = document.getElementById("caregiver-reminder-list");

  if (appState.reminders.length === 0) {
    listElement.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📋</div>
                <p>${t.noReminders}</p>
            </div>
        `;
    return;
  }

  const sortedReminders = appState.reminders.sort(
    (a, b) => new Date(a.time) - new Date(b.time)
  );

  listElement.innerHTML = sortedReminders
    .map(
      (reminder) => `
        <div class="reminder-item ${reminder.taken ? "taken" : "pending"}">
            <div class="reminder-header">
                <div>
                    <div class="reminder-title">${reminder.medicineName}</div>
                    <div class="reminder-details">💊 ${reminder.dosage}</div>
                    <div class="reminder-details">🕐 ${new Date(
                      reminder.time
                    ).toLocaleString()}</div>
                    <div class="reminder-details">🔄 ${reminder.frequency}</div>
                </div>
                <span class="status-badge ${
                  reminder.taken ? "status-taken" : "status-pending"
                }">
                    ${reminder.taken ? t.taken : t.pending}
                </span>
            </div>
            <div class="reminder-actions">
                <button class="btn-danger" onclick="deleteReminder(${
                  reminder.id
                })">
                    ${t.delete}
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

function renderPatientReminders() {
  const t = translations[appState.language] || translations.en;
  const listElement = document.getElementById("patient-reminder-list");

  const activeReminders = appState.reminders.filter((r) => !r.taken);

  if (activeReminders.length === 0) {
    listElement.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">💊</div>
                <p>${t.noActiveReminders}</p>
            </div>
        `;
    return;
  }

  const sortedReminders = activeReminders.sort(
    (a, b) => new Date(a.time) - new Date(b.time)
  );

  listElement.innerHTML = sortedReminders
    .map(
      (reminder) => `
        <div class="reminder-item pending">
            <div class="reminder-header">
                <div>
                    <div class="reminder-title">${reminder.medicineName}</div>
                    <div class="reminder-details">💊 ${reminder.dosage}</div>
                    <div class="reminder-details">🕐 ${new Date(
                      reminder.time
                    ).toLocaleString()}</div>
                </div>
            </div>
            <div class="reminder-actions">
                <button class="btn-success" onclick="markTaken(${reminder.id})">
                    ${t.markTaken}
                </button>
                <button class="btn-warning" onclick="snoozeReminder(${
                  reminder.id
                })">
                    ${t.snooze}
                </button>
                <button class="btn-danger" onclick="notifyCaregiver(${
                  reminder.id
                })">
                    ${t.notifyCaregiver}
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

function markTaken(id) {
  const t = translations[appState.language] || translations.en;
  const reminder = appState.reminders.find((r) => r.id === id);

  if (reminder) {
    reminder.taken = true;
    saveToStorage();
    speak(t.markedTaken);

    if (appState.userType === "caregiver") {
      renderCaregiverReminders();
    } else {
      renderPatientReminders();
    }
  }
}

function snoozeReminder(id) {
  const t = translations[appState.language] || translations.en;
  const reminder = appState.reminders.find((r) => r.id === id);

  if (reminder) {
    const currentTime = new Date(reminder.time);
    const newTime = new Date(currentTime.getTime() + 10 * 60000);
    reminder.time = newTime.toISOString().slice(0, 16);
    saveToStorage();
    speak(t.snoozed);
    renderPatientReminders();
  }
}

function notifyCaregiver(id) {
  const t = translations[appState.language] || translations.en;
  const reminder = appState.reminders.find((r) => r.id === id);

  if (reminder) {
    const message = Alert: ${reminder.medicineName} - Patient needs help or missed dose;

    if (appState.caregiverPhone) {
      alert(SMS sent to ${appState.caregiverPhone}: ${message});
      speak(t.caregiverNotified);
    } else {
      alert("No caregiver phone number registered");
    }
  }
}

function deleteReminder(id) {
  const t = translations[appState.language] || translations.en;

  if (confirm("Delete this reminder?")) {
    appState.reminders = appState.reminders.filter((r) => r.id !== id);
    saveToStorage();
    speak(t.deleted);

    if (appState.userType === "caregiver") {
      renderCaregiverReminders();
    } else {
      renderPatientReminders();
    }
  }
}

function speak(text) {
  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageCodes[appState.language] || "en-IN";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    speechSynthesis.speak(utterance);
  }
}

function speakAllReminders() {
  const t = translations[appState.language] || translations.en;
  const activeReminders = appState.reminders.filter((r) => !r.taken);

  if (activeReminders.length === 0) {
    speak(t.noActiveReminders);
    return;
  }

  activeReminders.forEach((reminder, index) => {
    const time = new Date(reminder.time).toLocaleTimeString();
    const message = `${index + 1}. ${reminder.medicineName}, ${t.dosageIs} ${
      reminder.dosage
    }, at ${time}`;

    setTimeout(() => {
      speak(message);
    }, index * 3000);
  });
}

function startVoiceRecognition() {
  const t = translations[appState.language] || translations.en;

  if (!("webkitSpeechRecognition" in window)) {
    alert(
      "Voice recognition not supported. Please use Chrome or Edge browser."
    );
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = languageCodes[appState.language] || "en-IN";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = function () {
    console.log("Voice recognition started");
    document.getElementById("voice-btn").classList.add("listening");
    document.getElementById("listening-text").classList.remove("hidden");
  };

  recognition.onend = function () {
    console.log("Voice recognition ended");
    document.getElementById("voice-btn").classList.remove("listening");
    document.getElementById("listening-text").classList.add("hidden");
  };

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript.toLowerCase();
    console.log("Voice input:", transcript);
    processVoiceCommand(transcript);
  };

  recognition.onerror = function (event) {
    console.error("Speech recognition error:", event.error);
    document.getElementById("voice-btn").classList.remove("listening");
    document.getElementById("listening-text").classList.add("hidden");
  };

  recognition.start();
}

function processVoiceCommand(command) {
  const t = translations[appState.language] || translations.en;
  const activeReminder = appState.reminders.find((r) => !r.taken);

  if (!activeReminder) {
    speak(t.noActiveReminders);
    return;
  }

  const takenKeywords = [
    "taken",
    "ली",
    "लिया",
    "తీసుకున్నాను",
    "எடுத்து",
    "খেয়েছি",
    "घेतले",
    "લીધું",
    "ತೆಗೆದುಕೊಂಡ",
    "എടുത്തു",
    "ਲਿਆ",
  ];
  const snoozeKeywords = [
    "snooze",
    "बाद",
    "तर्वात",
    "తర్వాత",
    "பிறகு",
    "পরে",
    "नंतर",
    "પછી",
    "ನಂತರ",
    "പിന്നീട്",
    "ਬਾਅਦ",
  ];
  const helpKeywords = [
    "help",
    "मदद",
    "मदत",
    "సహాయం",
    "உதவி",
    "সাহায্য",
    "મદદ",
    "ಸಹಾಯ",
    "സഹായം",
    "ਮਦਦ",
    "miss",
    "छूट",
    "తప్పిపోయింది",
    "தவற",
  ];

  if (takenKeywords.some((keyword) => command.includes(keyword))) {
    markTaken(activeReminder.id);
  } else if (snoozeKeywords.some((keyword) => command.includes(keyword))) {
    snoozeReminder(activeReminder.id);
  } else if (helpKeywords.some((keyword) => command.includes(keyword))) {
    notifyCaregiver(activeReminder.id);
  } else {
    speak("Command not recognized. Please say: taken, snooze, or help");
  }
}

function startReminderChecker() {
  setInterval(function () {
    checkReminders();
  }, 30000);

  setTimeout(function () {
    checkReminders();
  }, 2000);
}

function checkReminders() {
  const t = translations[appState.language] || translations.en;
  const now = new Date();

  appState.reminders.forEach(function (reminder) {
    if (reminder.taken) return;

    const reminderTime = new Date(reminder.time);
    const timeDiff = Math.abs(now - reminderTime);

    if (timeDiff < 60000) {
      triggerReminderAlert(reminder, t);
    }
  });
}

function triggerReminderAlert(reminder, t) {
  const message = ${t.itsTimeTake} ${reminder.medicineName}. ${t.dosageIs} ${reminder.dosage}. ${t.sayTaken}. ${t.saySnooze}. ${t.sayHelp};

  speak(message);

  if (Notification.permission === "granted") {
    new Notification("ArogyaVaani Reminder", {
      body: ${reminder.medicineName} - ${reminder.dosage},
      icon: "💊",
      requireInteraction: true,
    });
  }

  playAlertSound();
}

function playAlertSound() {
  try {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.5
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  } catch (error) {
    console.error("Error playing alert sound:", error);
  }
}

function emergencyCall() {
  const t = translations[appState.language] || translations.en;

  if (appState.caregiverPhone) {
    speak("Calling caregiver for emergency assistance");
    alert(Emergency call to ${appState.caregiverPhone});
    window.location.href = tel:${appState.caregiverPhone};
  } else {
    alert("No caregiver phone number registered");
  }
}

function requestNotificationPermission() {
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission();
  }
}

console.log("Script fully loaded");
