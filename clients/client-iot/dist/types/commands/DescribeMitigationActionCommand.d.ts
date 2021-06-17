import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeMitigationActionRequest, DescribeMitigationActionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMitigationActionCommandInput extends DescribeMitigationActionRequest {
}
export interface DescribeMitigationActionCommandOutput extends DescribeMitigationActionResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a mitigation action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeMitigationActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMitigationActionCommandInput} for command's `input` shape.
 * @see {@link DescribeMitigationActionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMitigationActionCommand extends $Command<DescribeMitigationActionCommandInput, DescribeMitigationActionCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeMitigationActionCommandInput;
    constructor(input: DescribeMitigationActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMitigationActionCommandInput, DescribeMitigationActionCommandOutput>;
    private serialize;
    private deserialize;
}
