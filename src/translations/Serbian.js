// @flow
import type { TRANSLATION_OBJ } from '../types'

export const SERBIAN_TRANSLATION: TRANSLATION_OBJ = {
  General: {
    loading: 'učitavam...',
    address: 'Adresa',
    privateKey: 'Privatni Ključ',
    cancel: 'Otkaži',
    fees: 'Provizije',
    version: 'Verzija',
    in: 'Ulaz',
    out: 'Izlaz'
  },
  MainPage: {
    title: 'BZC Novčanik',
    value: 'Vrednost',
    send: 'Pošalji',
    received: 'Primljene',
    sent: 'Poslate',
    noTxFound: 'Nema istorije transakcija.',
    noConnection: 'конекција је одбијенa.'
  },
  AddressInfoPage: {
    copyToClipboard: 'Prekopiraj Adresu na Clipboard'
  },
  SendPage: {
    title: 'Pošalji BZC',
    payTo: 'Plati',
    amountToPay: 'Suma Za Plaćanje',
    balance: 'Balans',
    networkFee: 'Mrežna Provizija',
    slowTx: 'Spora Tx',
    fastTx: 'Brza Tx',
    from: 'Od',
    toAddress: 'Za Adresu',
    amount: 'Suma',
    max: 'Max',
    send: 'Pošalji',
    txSuccessful: 'Uspešna transakcija! Kliknite ovde da vidite vašu transakciju.',
    confirmSend: 'Želim da pošaljem ove BZC',
    invalidAddress: 'Nevažeća `Za Adresu` Samo transparentne adrese su trenutno podržane.',
    invalidAmount: 'Nevažeća `Suma`.',
    invalidFee: 'Nevažeća `Provizije`. Probajte 0 :)',
    bitzecAmount: 'Suma mora biti veća od 0.',
    notEnoughZEN: 'Nedovoljno potvrđenih BZC na nalogu da bi se obavila transakcija.',
    noCameraPermissions: 'Nema dozvole za kameru. Možete dozvoliti pristup kameri u vašim podešavanjima.'
  },
  TxDetailPage: {
    txid: 'Id Transakcije',
    blockhash: 'Haš Bloka',
    blockheight: 'Visina Bloka',
    confirmations: 'Potvrde'
  },
  SettingsPage: {
    title: 'Podešavanja',
    language: 'Jezik',
    currency: 'Valuta',
    secretPhrase: 'Prikaži Tajnu Frazu',
    showPrivateKeys: 'Prikaži Privatne Ključeve',
    recoverExistingWallet: 'Oporavi Postojeći Novčanik',
    current: 'Trenutni'
  },
  SecretPhrasePage: {
    title: 'Tajna Fraza'
  },
  ShowPrivateKeyPage: {
    title: 'Privatni Ključevi'
  },
  RecoverExistingWalletPage: {
    title: 'Oporavi Postojeći Novčanik',
    secretPhrase: 'Tajna Fraza',
    textareaPlaceholder: 'Tajna fraza. min 16 karaktera',
    confirmUnderstand: 'Shvatam da će oporavljanje postojećeg novčanika, obrisati moj trenutni novčanik.',
    recover: 'Oporavi'
  },
  AboutPage: {
    title: 'O Programu'
  },
  PinPage: {
    changePinTitle: 'Promeni PIN',
    newPinPageTitle: 'Podešavanje BZC Novčanika',
    verifyPinPageTitle: 'BZC Novčanik PIN Verifikacija',
    setupNewPin: 'Postavite novi 4-cifreni PIN',
    reenterPin: 'Ponovo unesite PIN',
    pinsNotSimilar: 'Uneti PINovi se ne slažu',
    invalidPin: 'Nevažeći PIN',
    enterYourPin: 'Unesite vaš 4-cifreni PIN'
  },
  ContactsPage: {
    contacts: 'Contacts',
    contactsName: 'Name',
    contactsAddress: 'Address',
    noContactsFound: 'No contacts found.'
  }
}
