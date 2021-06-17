import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListActiveViolationsRequest, ListActiveViolationsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListActiveViolationsCommandInput extends ListActiveViolationsRequest {
}
export interface ListActiveViolationsCommandOutput extends ListActiveViolationsResponse, __MetadataBearer {
}
/**
 * <p>Lists the active violations for a given Device Defender security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListActiveViolationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListActiveViolationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListActiveViolationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListActiveViolationsCommandInput} for command's `input` shape.
 * @see {@link ListActiveViolationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListActiveViolationsCommand extends $Command<ListActiveViolationsCommandInput, ListActiveViolationsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListActiveViolationsCommandInput;
    constructor(input: ListActiveViolationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListActiveViolationsCommandInput, ListActiveViolationsCommandOutput>;
    private serialize;
    private deserialize;
}
