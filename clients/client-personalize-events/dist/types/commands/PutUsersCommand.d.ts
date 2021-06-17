import { PersonalizeEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeEventsClient";
import { PutUsersRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutUsersCommandInput extends PutUsersRequest {
}
export interface PutUsersCommandOutput extends __MetadataBearer {
}
/**
 * <p>Adds one or more users to a Users dataset. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeEventsClient, PutUsersCommand } from "@aws-sdk/client-personalize-events"; // ES Modules import
 * // const { PersonalizeEventsClient, PutUsersCommand } = require("@aws-sdk/client-personalize-events"); // CommonJS import
 * const client = new PersonalizeEventsClient(config);
 * const command = new PutUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutUsersCommandInput} for command's `input` shape.
 * @see {@link PutUsersCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutUsersCommand extends $Command<PutUsersCommandInput, PutUsersCommandOutput, PersonalizeEventsClientResolvedConfig> {
    readonly input: PutUsersCommandInput;
    constructor(input: PutUsersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutUsersCommandInput, PutUsersCommandOutput>;
    private serialize;
    private deserialize;
}
