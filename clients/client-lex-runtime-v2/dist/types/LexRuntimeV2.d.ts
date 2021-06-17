import { LexRuntimeV2Client } from "./LexRuntimeV2Client";
import { DeleteSessionCommandInput, DeleteSessionCommandOutput } from "./commands/DeleteSessionCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import { PutSessionCommandInput, PutSessionCommandOutput } from "./commands/PutSessionCommand";
import { RecognizeTextCommandInput, RecognizeTextCommandOutput } from "./commands/RecognizeTextCommand";
import { RecognizeUtteranceCommandInput, RecognizeUtteranceCommandOutput } from "./commands/RecognizeUtteranceCommand";
import { StartConversationCommandInput, StartConversationCommandOutput } from "./commands/StartConversationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p></p>
 */
export declare class LexRuntimeV2 extends LexRuntimeV2Client {
    /**
     * <p>Removes session information for a specified bot, alias, and user ID. </p>
     *          <p>You can use this operation to restart a conversation with a bot.
     *          When you remove a session, the entire history of the session is removed
     *          so that you can start again.</p>
     *          <p>You don't need to delete a session. Sessions have a time limit and
     *          will expire. Set the session time limit when you create the bot. The
     *          default is 5 minutes, but you can specify anything between 1 minute and
     *          24 hours.</p>
     *          <p>If you specify a bot or alias ID that doesn't exist, you receive a
     *             <code>BadRequestException.</code>
     *          </p>
     *          <p>If the locale doesn't exist in the bot, or if the locale hasn't been
     *          enables for the alias, you receive a
     *          <code>BadRequestException</code>.</p>
     */
    deleteSession(args: DeleteSessionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSessionCommandOutput>;
    deleteSession(args: DeleteSessionCommandInput, cb: (err: any, data?: DeleteSessionCommandOutput) => void): void;
    deleteSession(args: DeleteSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSessionCommandOutput) => void): void;
    /**
     * <p>Returns session information for a specified bot, alias, and
     *          user.</p>
     *          <p>For example, you can use this operation to retrieve session
     *          information for a user that has left a long-running session in
     *          use.</p>
     *          <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex
     *          returns a <code>BadRequestException</code>. If the locale doesn't exist
     *          or is not enabled for the alias, you receive a
     *             <code>BadRequestException</code>.</p>
     */
    getSession(args: GetSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetSessionCommandOutput>;
    getSession(args: GetSessionCommandInput, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
    getSession(args: GetSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
    /**
     * <p>Creates a new session or modifies an existing session with an Amazon Lex
     *          bot. Use this operation to enable your application to set the state of
     *          the bot.</p>
     */
    putSession(args: PutSessionCommandInput, options?: __HttpHandlerOptions): Promise<PutSessionCommandOutput>;
    putSession(args: PutSessionCommandInput, cb: (err: any, data?: PutSessionCommandOutput) => void): void;
    putSession(args: PutSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutSessionCommandOutput) => void): void;
    /**
     * <p>Sends user input to Amazon Lex. Client applications use this API to send
     *          requests to Amazon Lex at runtime. Amazon Lex then interprets the user input
     *          using the machine learning model that it build for the bot.</p>
     *          <p>In response, Amazon Lex returns the next message to convey to the user
     *          and an optional response card to display.</p>
     */
    recognizeText(args: RecognizeTextCommandInput, options?: __HttpHandlerOptions): Promise<RecognizeTextCommandOutput>;
    recognizeText(args: RecognizeTextCommandInput, cb: (err: any, data?: RecognizeTextCommandOutput) => void): void;
    recognizeText(args: RecognizeTextCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RecognizeTextCommandOutput) => void): void;
    /**
     * <p>Sends user input to Amazon Lex. You can send text or speech. Clients use
     *          this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex
     *          interprets the user input using the machine learning model built for
     *          the bot.</p>
     */
    recognizeUtterance(args: RecognizeUtteranceCommandInput, options?: __HttpHandlerOptions): Promise<RecognizeUtteranceCommandOutput>;
    recognizeUtterance(args: RecognizeUtteranceCommandInput, cb: (err: any, data?: RecognizeUtteranceCommandOutput) => void): void;
    recognizeUtterance(args: RecognizeUtteranceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RecognizeUtteranceCommandOutput) => void): void;
    /**
     * <p>Starts an HTTP/2 bidirectional event stream that enables you to send
     *          audio, text, or DTMF input in real time. After your application starts
     *          a conversation, users send input to Amazon Lex as a stream of events. Amazon Lex
     *          processes the incoming events and responds with streaming text or audio
     *          events.
     *       </p>
     *          <p></p>
     */
    startConversation(args: StartConversationCommandInput, options?: __HttpHandlerOptions): Promise<StartConversationCommandOutput>;
    startConversation(args: StartConversationCommandInput, cb: (err: any, data?: StartConversationCommandOutput) => void): void;
    startConversation(args: StartConversationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartConversationCommandOutput) => void): void;
}
