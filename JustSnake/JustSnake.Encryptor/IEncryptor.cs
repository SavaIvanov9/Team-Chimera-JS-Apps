namespace JustSnake.Encryptor
{
    public interface IEncryptor
    {
        string Encrypt(string plainText, string passPhrase);

        string Decrypt(string cipherText, string passPhrase);
    }
}
