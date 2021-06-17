import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeDefaultAuthorizerRequest, DescribeDefaultAuthorizerResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDefaultAuthorizerCommandInput extends DescribeDefaultAuthorizerRequest {
}
export interface DescribeDefaultAuthorizerCommandOutput extends DescribeDefaultAuthorizerResponse, __MetadataBearer {
}
/**
 * <p>Describes the default authorizer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDefaultAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDefaultAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeDefaultAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDefaultAuthorizerCommandInput} for command's `input` shape.
 * @see {@link DescribeDefaultAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDefaultAuthorizerCommand extends $Command<DescribeDefaultAuthorizerCommandInput, DescribeDefaultAuthorizerCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeDefaultAuthorizerCommandInput;
    constructor(input: DescribeDefaultAuthorizerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDefaultAuthorizerCommandInput, DescribeDefaultAuthorizerCommandOutput>;
    private serialize;
    private deserialize;
}
