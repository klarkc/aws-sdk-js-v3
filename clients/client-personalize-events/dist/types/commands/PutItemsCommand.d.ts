import { PersonalizeEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeEventsClient";
import { PutItemsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutItemsCommandInput extends PutItemsRequest {
}
export interface PutItemsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Adds one or more items to an Items dataset. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeEventsClient, PutItemsCommand } from "@aws-sdk/client-personalize-events"; // ES Modules import
 * // const { PersonalizeEventsClient, PutItemsCommand } = require("@aws-sdk/client-personalize-events"); // CommonJS import
 * const client = new PersonalizeEventsClient(config);
 * const command = new PutItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutItemsCommandInput} for command's `input` shape.
 * @see {@link PutItemsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutItemsCommand extends $Command<PutItemsCommandInput, PutItemsCommandOutput, PersonalizeEventsClientResolvedConfig> {
    readonly input: PutItemsCommandInput;
    constructor(input: PutItemsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutItemsCommandInput, PutItemsCommandOutput>;
    private serialize;
    private deserialize;
}
