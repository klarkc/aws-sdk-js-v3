import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DescribeWorldRequest, DescribeWorldResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeWorldCommandInput extends DescribeWorldRequest {
}
export interface DescribeWorldCommandOutput extends DescribeWorldResponse, __MetadataBearer {
}
/**
 * <p>Describes a world.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeWorldCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeWorldCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeWorldCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorldCommandInput} for command's `input` shape.
 * @see {@link DescribeWorldCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeWorldCommand extends $Command<DescribeWorldCommandInput, DescribeWorldCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DescribeWorldCommandInput;
    constructor(input: DescribeWorldCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorldCommandInput, DescribeWorldCommandOutput>;
    private serialize;
    private deserialize;
}
