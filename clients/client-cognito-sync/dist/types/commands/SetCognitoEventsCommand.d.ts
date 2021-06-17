import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { SetCognitoEventsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetCognitoEventsCommandInput extends SetCognitoEventsRequest {
}
export interface SetCognitoEventsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, SetCognitoEventsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, SetCognitoEventsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new SetCognitoEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetCognitoEventsCommandInput} for command's `input` shape.
 * @see {@link SetCognitoEventsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetCognitoEventsCommand extends $Command<SetCognitoEventsCommandInput, SetCognitoEventsCommandOutput, CognitoSyncClientResolvedConfig> {
    readonly input: SetCognitoEventsCommandInput;
    constructor(input: SetCognitoEventsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetCognitoEventsCommandInput, SetCognitoEventsCommandOutput>;
    private serialize;
    private deserialize;
}
