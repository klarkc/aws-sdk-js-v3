import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingsRequest, ListThingsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListThingsCommandInput extends ListThingsRequest {
}
export interface ListThingsCommandOutput extends ListThingsResponse, __MetadataBearer {
}
/**
 * <p>Lists your things. Use the <b>attributeName</b> and
 * 				<b>attributeValue</b> parameters to filter your things.
 * 			For example, calling <code>ListThings</code> with attributeName=Color and
 * 			attributeValue=Red retrieves all things in the registry that contain an attribute
 * 				<b>Color</b> with the value <b>Red</b>. </p>
 * 		       <note>
 * 			         <p>You will not be charged for calling this API if an <code>Access denied</code> error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingsCommandInput} for command's `input` shape.
 * @see {@link ListThingsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListThingsCommand extends $Command<ListThingsCommandInput, ListThingsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListThingsCommandInput;
    constructor(input: ListThingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListThingsCommandInput, ListThingsCommandOutput>;
    private serialize;
    private deserialize;
}
