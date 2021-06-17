import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { DescribeProjectRequest, DescribeProjectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeProjectCommandInput extends DescribeProjectRequest {
}
export interface DescribeProjectCommandOutput extends DescribeProjectResponse, __MetadataBearer {
}
/**
 * <p>Returns the definition of a specific DataBrew project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeProjectCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeProjectCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new DescribeProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProjectCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeProjectCommand extends $Command<DescribeProjectCommandInput, DescribeProjectCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: DescribeProjectCommandInput;
    constructor(input: DescribeProjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProjectCommandInput, DescribeProjectCommandOutput>;
    private serialize;
    private deserialize;
}
