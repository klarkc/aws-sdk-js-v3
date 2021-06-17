import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DescribeParametersRequest, DescribeParametersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeParametersCommandInput extends DescribeParametersRequest {
}
export interface DescribeParametersCommandOutput extends DescribeParametersResponse, __MetadataBearer {
}
/**
 * <p>Returns the detailed parameter list for a particular parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DescribeParametersCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DescribeParametersCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DescribeParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeParametersCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeParametersCommand extends $Command<DescribeParametersCommandInput, DescribeParametersCommandOutput, DAXClientResolvedConfig> {
    readonly input: DescribeParametersCommandInput;
    constructor(input: DescribeParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeParametersCommandInput, DescribeParametersCommandOutput>;
    private serialize;
    private deserialize;
}
