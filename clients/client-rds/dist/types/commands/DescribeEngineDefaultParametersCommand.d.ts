import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeEngineDefaultParametersMessage, DescribeEngineDefaultParametersResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEngineDefaultParametersCommandInput extends DescribeEngineDefaultParametersMessage {
}
export interface DescribeEngineDefaultParametersCommandOutput extends DescribeEngineDefaultParametersResult, __MetadataBearer {
}
/**
 * <p>Returns the default engine and system parameter information for the specified database engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeEngineDefaultParametersCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeEngineDefaultParametersCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeEngineDefaultParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEngineDefaultParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeEngineDefaultParametersCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEngineDefaultParametersCommand extends $Command<DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeEngineDefaultParametersCommandInput;
    constructor(input: DescribeEngineDefaultParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput>;
    private serialize;
    private deserialize;
}
