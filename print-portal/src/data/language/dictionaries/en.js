import footer from '../templates/en/footer';

const en = {
    'date': {
        'months': {
            'abbr': ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        }
    },
    'template': { footer },
    'views': {
        'home': {
            'pageHeader': 'Get access with a certificate on paper',
            'pageIntro': '<h2 class="screen-reader-text">Here\'s how it works</h2>' +
                '<p>Your and other people’s health matters. That is why some countries and places ask for a coronavirus pass. You’re only allowed to enter carrying this pass.</p>' +
                '<p>A certificate on paper is convenient if you don\'t have a smartphone.</p>' +
                '<h4>Certificate of test or vaccination</h4>' +
                '<p>You can make a coronavirus pass with CoronaCheck if:' +
                '<ul class="ul--with-padding"><li>you have been vaccinated</li><li>a test result confirms you don’t have corona</li><li>you\'ve had coronavirus and are recovered</li></ul></p>' +
                '<h4>QR code = your proof</h4>' +
                '<p>CoronaCheck generates a QR code with your vaccination, test result or recovery. That is your certificate. This QR code will be checked before you get access.</p>' +
                '<h4>QR codes for the Netherlands and international</h4>' +
                '<p>This app generates a QR code for the Netherlands and one for other countries. Travelling outside of the Netherlands? Then use your international QR code.</p>',
            'userConsentHeader': 'Start making a certificate on paper',
            'userConsentText': 'I have read the <a href="https://coronacheck.nl/en/privacy" target="_blank" rel="noopener noreferrer">privacy statement</a> and understand how CoronaCheck processes my data.',
            'noConsentError': 'Give consent to the privacy statement first'
        },
        'choiceProof': {
            'pageHeader': 'What certificate do you want to make?',
            'pageIntro': '',
            'choiceTestHeader': 'A test certificate',
            'choiceTestBody': 'The test proves I do not have coronavirus',
            'choiceRecoveryHeader': 'A recovery certificate',
            'choiceRecoveryBody': 'The test proves I have had coronavirus',
            'choiceVaccinationHeader': 'A vaccination certificate',
            'choiceVaccinationBody': 'I have had my injection or injections'
        },
        'choiceTestLocation': {
            'pageHeader': 'Where have you been tested?',
            'pageIntro': '<p>Indicate whether you were tested at the GGD or at a different test location.</p>',
            'choiceGGDHead': 'GGD',
            'choiceGGDBody': 'Log in with DigiD',
            'loginDigid': 'I don’t have DigiD',
            'choiceOtherLocation': 'Other test location',
            'didNotGetTestedYet': 'I have not been tested yet'
        },
        'collectVaccination': {
            'pageHeader': 'Retrieve vaccination details',
            'pageIntro': '<p>Have you been vaccinated? Log in with DigiD. Your vaccination details will be automatically retrieved.</p>'
        },
        'vaccinationOverview': {
            'pageHeader': 'Your retrieved vaccinations',
            'pageIntro': '<p>You can make a QR code of your vaccination. This will be your certificate.</p>',
            'createTestProofButton': 'Make certificate'
        },
        'vaccinationsNone': {
            'pageHeader': 'No vaccination(s) available',
            'pageIntro': '<p>Details about your vaccination are not available.</p><p>Have you been vaccinated recently? It might take a little while before your details are available.</p><p>Your general practitioner might not be affiliated with the GGD. You can find more information about what to do on the <a href="https://www.coronacheck.nl/en/guidepost" target="_blank" rel="noopener noreferrer">Guidepost</a>.</p>'
        },
        'notPossibleVaccinations': {
            'pageHeader': 'We can’t make a certificate',
            'pageIntro': '<p>At the moment, we cannot provide proof of your vaccination. This can have different causes. <a href="https://www.coronacheck.nl/en/guidepost" target="_blank" rel="noopener noreferrer">Learn more about possible causes</a>.</p>'
        },
        'vaccinationsIncomplete': {
            'pageHeader': 'We can’t make a certificate',
            'pageIntro': '<p>At this moment, we can’t make a certificate. For a Dutch certificate you need to be fully vaccinated.</p>'
        },
        'collectRecovery': {
            'pageHeader': 'Retrieve recovery details',
            'pageIntro': '<p>Have you had coronavirus? Then you can make a recovery certificate of the positive test result. Log in with DigiD to retrieve your test result.</p>' +
                '<p>Your recovery certificate will be valid 11 days after the positive test result. You also need to be symptom-free.</p>'
        },
        'collectPositiveTest': {
            'pageHeader': 'Retrieve test result'
        },
        'provideCode': {
            'pageHeader': 'Retrieve test result',
            'pageIntro': 'Enter your retrieval code. The test location sent it to you. Or click on the link in the email you\'ll get from the test location.',
            'uniqueCode': 'Retrieval code',
            'verificationCode': 'Verification code',
            'verificationCodeDirection': 'You get a code via text or email',
            'sendAgain': 'Send again',
            'didNotGetCode': 'I don\'t have a code',
            'emptyTestCode': 'Retrieval code not entered',
            'unknownTestProvider': 'Retrieval code is from an unknown test location',
            'invalidTestCode': 'Invalid retrieval code',
            'tokenExpired': 'Retrieval code has expired',
            'invalidVerificationCode': 'Invalid verification code',
            'emptyVerificationCode': 'Verification code not entered',
            'sendCode': 'Send code'
        },
        'negativeTestOverview': {
            'pageHeader': 'Check your test result',
            'pageIntro': '<p>This test result is retrieved from the test location.</p><p>Is the below correct? Then you can convert the negative test result into a QR code. This is your test certificate.</p>',
            'createTestProofButton': 'Make certificate',
            'retrievedTestResult': 'Retrieved test result'
        },
        'testResultPending': {
            'pageHeader': 'Test result not yet known',
            'pageIntro': 'Please try again later.<br>If you have any questions, contact your test location.'
        },
        'testResultNone': {
            'pageHeader': 'No negative test result available',
            'pageIntro': 'There is no negative test result available.'
        },
        'recoveryOverview': {
            'pageHeader': 'Your retrieved positive test result',
            'pageIntro': '<p>Are your details correct? Then you can turn your positive test result into a QR code. This is your certificate.</p>',
            'createTestProofButton': 'Make certificate'
        },
        'recoveryExpired': {
            'pageHeader': 'Positive test result no longer valid',
            'pageIntro': '<p>It has been more than %{days} days since you tested positive for coronavirus. Therefore, your test result is no longer valid. Unfortunately, you cannot create a recovery certificate.</p><p>Find more information on the <a href="https://coronacheck.nl/en/guidepost.html" target="_blank" rel="noopener noreferrer">Guidepost</a>.</p>'
        },
        'recoveryNone': {
            'pageHeader': 'No positive test result available',
            'pageIntro': '<p>Were you just tested? It can take a few hours before your positive test result is available. Please try again later.</p><p>Find more information on the <a href="https://coronacheck.nl/en/guidepost" target="_blank" rel="noopener noreferrer">Guidepost</a>.</p>'
        },
        'recoveryInvalid': {
            'pageHeader': 'Positive test result is not suitable',
            'pageIntro': '<p>You were tested positive after your first vaccination. Your test result is therefore not suitable for creating a Dutch certificate.</p><p>Check the <a href="https://coronacheck.nl/en/guidepost" target="_blank" rel="noopener noreferrer">frequently asked questions</a> for more information.</p>'
        },
        'print': {
            'pageTitle': 'Your certificate',
            'pageHeader': {
                'domestic': 'Success! Your certificate is ready below',
                'european': 'Success! Your certificate is ready below',
                'both': 'Success! Your certificates are ready below'
            },
            'pageIntro': {
                'domestic': '<p>You only have a %{type} certificate for use in the Netherlands. You can use it to access places or activities within the Netherlands, but not when you’re travelling abroad or crossing the border.</p>' +
                    '<p>Open the PDF and print it. Take your printed certificate to the place or activity you’re visiting.</p>',
                'european': '<p>You only have an international %{type} certificate. You can use this if you are abroad or crossing the border, but not within the Netherlands.</p>' +
                    '<p>Open the PDF and print it. Take your printed certificate to the place or activity you’re visiting.</p>',
                'both': '<p>You have a Dutch and an international %{type} certificate. Are you crossing the border, or are you abroad right now? Then please use the international certificate.</p>' +
                    '<p>Open the PDFs and print them. Take your printed certificate to the place or activity you’re visiting. Or to the country you’re traveling to.</p>'
            },
            'proofType': {
                'vaccination': 'vaccination',
                'recovery': 'recovery',
                'negativetest': 'test'
            },
            'validInFuture': '<p>Please note: your recovery certificate will become valid 11 days after the positive test result. You need to be free of symptoms as well.</p>',
            'details': {
                'header': 'More information about your certificate',
                'set': {
                    'validPeriod': {
                        'summary': 'How long is my paper certificate valid for?',
                        'content': '<p>This paper certificate is valid for 1 year. After that, you can create a new paper certificate of your vaccination.</p>'
                    },
                    'validLocation': {
                        'summary': 'Where can I use my international certificate?',
                        'content': '<p>The validity of corona certificates differs per country. Before leaving, please check which certificate you need for your destination at <a href="https://www.netherlandsworldwide.nl/" target="_blank" rel="noopener noreferrer">www.netherlandsworldwide.nl</a>.</p>'
                    },
                    'whyNoDomesticVaccination': {
                        'summary': 'Why didn’t I receive a Dutch vaccination certificate?',
                        'content': '<p>To get a Dutch vaccination certificate, you need to be fully vaccinated or have recovered from coronavirus before your first vaccination.</p>'
                    },
                    'whyNoDutchCertificate': {
                        'summary': 'Had coronavirus before your first vaccination?',
                        'content': '<p>Retrieve your positive test result. You will also receive a Dutch certificate then.</p>',
                        'label': 'Retrieve my test result'
                    },
                    'whyNoEuropeanRecovery': {
                        'summary': 'Why didn’t I receive an international recovery certificate?',
                        'content': '<p>Your recovery certificate isn\'t valid internationally. The reason for this could be that the type of test is not accepted, or that the test is no longer valid abroad. An international recovery certificate can only be made with a PCR-test that is less than 180 days old. Read more about the possible causes on the <a href="https://coronacheck.nl/en/wegwijzer" target="_blank" rel="noopener noreferrer">Guidepost</a>.</p>'
                    },
                    'whyNoEuropeanTest': {
                        'summary': 'Why didn’t I receive an international test certificate?',
                        'content': '<p>You may not have received an international test certificate because your type of test isn’t accepted abroad. Get tested again for a certificate that is also valid abroad.</p>'
                    },
                    'whyNoDomesticTest': {
                        'summary': 'Why don’t I get a Dutch test certificate?',
                        'content': '<p>You may not have received a Dutch test certificate because the validity period of a test may be shorter in the Netherlands than in other countries. Get tested again for a certificate that is also valid in the Netherlands.</p>'
                    }
                }
            }
        },
        'serverBusy': {
            'pageHeader': 'Sorry, it is really busy',
            'pageIntro': '<p>Please try again later.</p>' +
                '<p><strong>Error code</strong><br>%{error}</p>' +
                '<p><a href="https://status.coronacheck.nl/en/">View the latest outages</a></p>'
        },
        'errorNoEvents': {
            'pageHeader': 'Sorry, your details were not retrieved',
            'pageIntro': '<p>Due to increased traffic or an outage at one of the involved parties, some details of your %{type} may be missing. </p><p>Tip: wait one hour and try again.</p>'
        },
        'errorTokenFlow': {
            'pageHeader': 'Sorry, something has gone wrong',
            'pageIntro': '<p>Something is going wrong at the test location. Therefore, your details can’t be retrieved.</p><h4>What now?</h4><p>Contact the test location and give them the following error code:</p><p><strong>Error code: %{error}</strong></p>'
        },
        'errorDigiD': {
            'pageHeader': 'Sorry, something has gone wrong',
            'pageIntro': '<p>There was an error while communicating with DigiD. Please try again later. If the error persists, please check <a href="https://www.digid.nl/en" target="_blank">www.digid.nl/en</a> for the latest information.</p><p><strong>Foutcode: %{error}</strong></p>'
        },
        'errorGeneral': {
            'pageHeader': 'Sorry, something has gone wrong',
            'pageIntro': '<p>Try again later or view the latest outages at <a href="https://status.coronacheck.nl/en/">https://status.coronacheck.nl/en/</a></p><p><strong>Error code(s)</strong><br>%{errors}</p>'
        },
        'errorNoBsn': {
            'pageHeader': 'No social security number found',
            'pageIntro': '<p>The healthcare provider who vaccinated or tested you can help you further. Contact them and let them know CoronaCheck couldn’t find a social security number.</p>'
        },
        'errorSessionExpired': {
            'pageHeader': 'Your session has expired',
            'pageIntro': '<p>You’ve waited too long. For safety reasons, you were logged out. Login again with your DigiDto retrieve your details.</p>'
        },
        'errorProofNotPossible': {
            'pageHeader': 'We can’t make a certificate',
            'pageIntro': '<p>At this moment, we can\'t make a certificate. This can have various causes. Read more on the <a href="https://www.coronacheck.nl/en/guidepost" target="_blank" rel="noopener noreferrer">Guidepost</a>.</p>'
        },
        'errorTimeout': {
            'pageHeader': 'Sorry, something has gone wrong',
            'pageIntro': '<p>Could not reach the server.</p>' +
                '<p><strong>Error code</strong><br>%{error}</p>' +
                '<p><a href="https://status.coronacheck.nl/en/">View the latest outages</a></p>'
        }
    },
    'components': {
        'proofRegion': {
            'domestic': {
                'title': 'Dutch certificate',
                'intro': 'Use this certificate to access places or activities within the Netherlands.',
                'paperTitle': 'Dutch certificate'
            },
            'european': {
                'title': 'International certificate',
                'intro': 'Use this certificate if you are abroad or crossing the border.',
                'paperTitle': 'International certificate'
            },
            'viewPDF': 'View PDF',
            'downloadPDF': 'Download PDF'
        },
        'languagePicker': {
            'language': 'Language',
            'changeLanguage': 'Change language',
            'currentLanguage': 'Current language'
        },
        'faq': {
            'viewFaq': 'View frequently asked questions'
        },
        'preferMobile': {
            'header': 'Prefer having your certificate on mobile?',
            'intro': 'Then download the app. You can also make a print of the certificate in the app.'
        },
        'eventInfo': {
            'head': 'What has been retrieved?',
            'name': 'Name',
            'dateOfBirth': 'Date of birth',
            'dateOfTest': 'Test date',
            'testResult': 'Test result',
            'validFrom': 'Valid From',
            'validUntil': 'Valid until',
            'eventsFetchedAt': 'Data retrieved at'
        },
        'test': {
            'resultNegative': 'Negative test result',
            'yourCredentials': 'Identification details',
            'info': {
                'detailsRetrieved': 'The following details were retrieved at the test location',
                'testType': 'Type test',
                'testName': 'Test name',
                'testResultNegative': 'negative (no corona)',
                'testResultPositive': 'positive (corona)',
                'testLocation': 'Test location',
                'testManufacturer': 'Test manufacturer',
                'testCountry': 'Tested in',
                'identificationCode': 'Unique test identifier'
            }
        },
        'vaccination': {
            'vaccination': 'Vaccination',
            'info': {
                'detailsRetrieved': 'The following details of your vaccination have been retrieved at %{provider}',
                'pathogen': 'Pathogen',
                'vaccine': 'Vaccine',
                'vaccineType': 'Vaccine type',
                'manufacturer': 'Manufacturer',
                'doses': 'Doses',
                'finalDosis': 'Is this the last dose of your vaccination?',
                'vaccinationDate': 'Vaccination date',
                'vaccinationCountry': 'Country of vaccination',
                'identificationCode': 'Unique vaccination identifier',
                'finalDosisValue': {
                    'yes': 'Yes',
                    'recovery': 'Yes (I\'ve had coronavirus earlier)',
                    'prior': 'Yes (I have been vaccinated elsewhere)',
                    'no': 'No',
                    'unknown': 'Unknown'
                }
            }
        },
        'recovery': {
            'title': 'Recovery certificate',
            'info': {
                'detailsRetrieved': 'The following details were retrieved'
            }
        },
        'positiveTest': {
            'title': 'Positive test result',
            'info': {
                'detailsRetrieved': 'The following details were retrieved'
            }
        },
        'digid': {
            'loginDigid': 'Log in with DigiD',
            'dontHaveDigid': 'I don’t have DigiD',
            'proofType': {
                'negativetest': 'test result',
                'vaccination': 'vaccinations',
                'positivetest': 'test result',
                'positivetest,recovery': 'test result'
            }
        }
    },
    'message': {
        'info': {
            'somethingWrong': {
                'vaccination': {
                    'head': 'Something is wrong',
                    'body': '<p>Wrong name or date of birth? Or are your vaccination details incorrect? Please go to <a href="https://www.coronacheck.nl/en/guidepost" target="_blank" rel="noopener noreferrer">CoronaCheck.nl/en/guidepost</a> for more information.</p>'
                },
                'negativetest': {
                    'head': 'Something is wrong',
                    'body': '<p>Do your details not match your ID? Please contact your test location to have your details adjusted.</p>'
                },
                'positivetest': {
                    'head': 'Something is wrong',
                    'body': '<p>Do your details not match your ID? Please contact your test location to have your details adjusted.</p>'
                }
            },
            'noVerificationCode': {
                'head': 'Need a new verification code?',
                'body': '<p>The test location sends you a verification code via text or email. Didn\'t get one? Then you can request a new code.</p>'
            },
            'didNotGetTestedYet': {
                'head': 'I haven’t been tested yet',
                'body': '<p>You must get tested before you make a QR code. You can only turn a negative test result into a QR code.</p><p>A test certificate is valid until 24 hours after the moment you\'ve been tested. So schedule your test on time. And make sure your QR code is scanned at the entrance within 24 hours.</p><p><a href="https://coronacheck.nl/en/testafspraak-in-app" class="btn" target="_blank" rel="noopener noreferrer">Make an appointment\n</a></p>'
            },
            'areYouSureToCancel': {
                'head': 'Are you sure you want to stop?',
                'body': 'Then you will have to retrieve your details again later.',
                'yes': 'Yes, stop',
                'no': 'No, continue'
            },
            'digidCanceled': {
                'head': 'Login was cancelled',
                'body': 'Want to retrieve your %{type}? Log in again with DigiD.',
                'vaccination': 'vaccination details',
                'negativetest': 'test details',
                'positivetest': 'recovery details'
            },
            'digidFinished': {
                'body': 'We\'ll retrieve your %{type}. You will be logged out of DigiD automatically'
            },
            'sessionEnded': {
                'head': 'Your session has ended',
                'body': 'For safety, your session will automatically stop after 24 hours. '
            }
        },
        'error': {
            'general': {
                'head': 'Sorry, something went wrong',
                'body': '<p>Because of a technical error. Contact the CoronaCheck helpdesk.</p>'
            },
            'noInternet': {
                'head': 'You\'re not connected to the internet',
                'body': 'Check your connection and try again.'
            },
            'collectEventsWithErrors': {
                'head': 'Are these all your vaccinations?',
                'body': '<p>Due to increased traffic or an outage, some of your details may be missing. Are you missing a vaccination? Please come back later and retrieve your details again.</p>'
            }
        }
    },
    'pdf': {
        'metadata': {
            'title': 'Certificate containing QR code',
            'author': 'CoronaCheck'
        }
    },
    'certificate': {
        'domestic': 'Dutch',
        'european': 'International'
    },
    'and': 'And',
    'back': 'Back',
    'close': 'Close',
    'details': 'Details',
    'faq': 'Frequently asked questions',
    'forInstanceAbbr': 'E.g.',
    'goBackToStart': 'To Home',
    'goToOverview': 'Back to overview',
    'header-appstore': 'Download on the App Store',
    'header-googleplaystore': 'Get it on Google Play',
    'identity_image_alt': 'Make Holder QR code',
    'logo-government': 'Logo Dutch Government, homepage',
    'next': 'Next',
    'of': 'of',
    'pageTitle': 'CoronaCheck Print Portal',
    'skiplink': 'Skip to content',
    'somethingIsWrong': 'Is something wrong?',
    'tryAgain': 'Try again',
    'unknown': 'Unknown',
    'tooBusy': 'It\'s very busy right now, and therefore you cannot log in at the moment. Could you please try again later?'
}

export default en;
