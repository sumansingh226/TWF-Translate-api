import axios from "axios";
import { Request, Response, NextFunction } from "express";

/**
 * Translate English text to French using the LibreTranslate API.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 * @returns {Promise<Response>} The response containing the translated text.
 */
export const translateEnglightTofrench = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response> => {
    try {
        // Extract the text to translate from the request body
        const { text } = req.body;

        // Check if the text is missing
        if (!text) {
            return res.status(400).json({ error: "Missing text to translate" });
        }

        // Translate the text to French
        const translationResponse = await axios.post(
            "https://libretranslate.de/translate",
            {
                q: text,
                source: "en",
                target: "fr",
            }
        );
        const translation = translationResponse.data;

        // Send the translated text in the response
        return res.status(200).json(translation);
    } catch (error) {
        // Handle translation errors
        console.error("Translation error:", error);
        return res.status(500).json({ error: "Failed to translate text" });
    }
};
