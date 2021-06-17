import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteV2LoggingLevelRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteV2LoggingLevelCommandInput extends DeleteV2LoggingLevelRequest {
}
export interface DeleteV2LoggingLevelCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a logging level.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteV2LoggingLevelCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteV2LoggingLevelCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteV2LoggingLevelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteV2LoggingLevelCommandInput} for command's `input` shape.
 * @see {@link DeleteV2LoggingLevelCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteV2LoggingLevelCommand extends $Command<DeleteV2LoggingLevelCommandInput, DeleteV2LoggingLevelCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteV2LoggingLevelCommandInput;
    constructor(input: DeleteV2LoggingLevelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteV2LoggingLevelCommandInput, DeleteV2LoggingLevelCommandOutput>;
    private serialize;
    private deserialize;
}
