// This is the same as /advanced/chain.crt shipped on the devices.
//
var factory_root_cert = atob("MIIDrTCCApWgAwIBAgIBATANBgkqhkiG9w0BAQsFADB4MQswCQYDVQQGEwJDQTEQ MA4GA1UECAwHT250YXJpbzEQMA4GA1UEBwwHVG9yb250bzEWMBQGA1UECgwNQ29p bmtpdGUgSW5jLjERMA8GA1UECwwIT3BlbmRpbWUxGjAYBgNVBAMMEUZhY3Rvcnkg Um9vdCBDQSAxMB4XDTE3MDIwMTAwMDAwMFoXDTM3MDEwMTAwMDAwMFoweDELMAkG A1UEBhMCQ0ExEDAOBgNVBAgMB09udGFyaW8xEDAOBgNVBAcMB1Rvcm9udG8xFjAU BgNVBAoMDUNvaW5raXRlIEluYy4xETAPBgNVBAsMCE9wZW5kaW1lMRowGAYDVQQD DBFGYWN0b3J5IFJvb3QgQ0EgMTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC ggEBAMKw2OjepDwxyqQGZkh519+snMHzI1eR6vrOInaKDmq2sTQE5x5PMoNdWEp6 f0V1L5e5YAfVfazu5L/d2GQDI2JIsCQGP7vYkqkGfFRAvzWPMiNrwNkPQymPFC5P +2rRxAk+W9mTpjA0oZ6Xp5+B5oWTulGYygPleO6WxxKvxGEcD0WOZQqDmIRVIcCD 1DiEHqDWmHzRO6yUaHrM323iR/8RrkVSn288vcOUOHe3cG9LSWaMwBB+BtcyKGJf i8fudSQdSQS75HkznFIs2E6f2tja42LmL+E37FftcbaAL8yvk5hqA8PWvkZ/1Foj SJehAuMa/sHqRE1jdJeG4jCC3c8CAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAd BgNVHQ4EFgQUNEwRZVIzdnrWOFPw1B+vTWZAYOgwDgYDVR0PAQH/BAQDAgEGMA0G CSqGSIb3DQEBCwUAA4IBAQC0h+a23N0gTQKMY7wCTGPsnupOkdA9fdL8jSoJF1sH BoDtnftkw97FK+NJ7Wvl0gg1O9wiHyU+j2fP4M6k5iF+R8cg35jFNekMNizbR+Ey 8Lnp8kR9fn1tNzZS2UlaEX6k9EGWFvEq4PL4rSvbz7RSSCogQ4x7/5vGFjKYVluA CVp1F4nYuzlB87ewBH9qU821y/3YcdbBdqb+U/EK1/JU1k29RitgNjg0AFu2Yj1f oiGlcjWgMxJmTrlboJlal+adQY6G1f7vaD84hnHsRPnlJAkNQr5XannzTrxwZZQu 0oAwidheaTMUEiGDMRGCPhYvmP8DsasZwifPE5FNBi50");

var batch_cert = atob("MIIDbTCCAlWgAwIBAgICA+kwDQYJKoZIhvcNAQELBQAweDELMAkGA1UEBhMCQ0Ex EDAOBgNVBAgMB09udGFyaW8xEDAOBgNVBAcMB1Rvcm9udG8xFjAUBgNVBAoMDUNv aW5raXRlIEluYy4xETAPBgNVBAsMCE9wZW5kaW1lMRowGAYDVQQDDBFGYWN0b3J5 IFJvb3QgQ0EgMTAeFw0xNzAyMDEwMDAwMDBaFw0zNzAxMDEwMDAwMDBaMBYxFDAS BgNVBAMMC0JhdGNoICMxIENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC AQEAuUlthPoLXfFnnba3KyIntbX9bptvaczbpxasOOQHfy+dwk7sEsIWTSeGrWGL MjZR6vTHrnmmQL/CG4jDX5jLPgw7a7BxSB0SlI0EKpdj53qvyOXlZvN9oa9+T2JQ pq7zVTA9Qxf+tK0//kn+UrA+I16KlFVqfY9guoXfmtIXq7VQRGHjeYjN5/9rh8dY JVar8lGI3bdfdWIsYy4WiVYYGoEgUPzx//CsMAs4LE5gk5DsYyxxdQ/JiWp+cGzc hcBE6q3BCI+UFJBUdLCi2d8bu8z2Ks07oC1pdhcJyvoPYfSH0o0fGex84cXEhcmS h+DQkixfiqujtiytErnrrMhK/QIDAQABo2MwYTAfBgNVHSMEGDAWgBQ0TBFlUjN2 etY4U/DUH69NZkBg6DAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBSdhVZiRgxW AZzn2F1H+TRNobfIkDAOBgNVHQ8BAf8EBAMCAQYwDQYJKoZIhvcNAQELBQADggEB AHLsE+pY8CXiFbM2tr6OG3qNMJXqQ7T2S2xje+YWXzOVGb2RRFAtrWnVoJJSoWou I2Qs87e0ic69yDMzTmsRI4HiCxrwVLh2u9Hy/2iMi8cE8MaBe6kUcj0GDBP2BLHU MGhsP0OFcPjjP3RiZZ8syQWmZ9LKyLKUqtaX+thv3SKb5hK82g3s4z324+yoP76I gVsGpM8L478BbknAUt0H3niOMVRlJT6qyJctp2xXU5nCwR9m9jNF3E8uQj7eZ0Vy F65VbHA9fwlBIiHLm9dkCxciDSTgq3eauwKMCYGPFat5Q0T/BVAERqfN2rhnBFwx z3pogLOu1mXmjKOTlznp8MY=");