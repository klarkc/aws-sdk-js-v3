import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DescribeDefaultParametersRequest, DescribeDefaultParametersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDefaultParametersCommandInput extends DescribeDefaultParametersRequest {
}
export interface DescribeDefaultParametersCommandOutput extends DescribeDefaultParametersResponse, __MetadataBearer {
}
/**
 * <p>Returns the default system parameter information for the DAX caching
 *             software.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DescribeDefaultParametersCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DescribeDefaultParametersCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DescribeDefaultParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDefaultParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDefaultParametersCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDefaultParametersCommand extends $Command<DescribeDefaultParametersCommandInput, DescribeDefaultParametersCommandOutput, DAXClientResolvedConfig> {
    readonly input: DescribeDefaultParametersCommandInput;
    constructor(input: DescribeDefaultParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDefaultParametersCommandInput, DescribeDefaultParametersCommandOutput>;
    private serialize;
    private deserialize;
}
