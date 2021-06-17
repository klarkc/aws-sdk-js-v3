import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { DescribeJobRunRequest, DescribeJobRunResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeJobRunCommandInput extends DescribeJobRunRequest {
}
export interface DescribeJobRunCommandOutput extends DescribeJobRunResponse, __MetadataBearer {
}
/**
 * <p>Represents one run of a DataBrew job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeJobRunCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeJobRunCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new DescribeJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobRunCommandInput} for command's `input` shape.
 * @see {@link DescribeJobRunCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeJobRunCommand extends $Command<DescribeJobRunCommandInput, DescribeJobRunCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: DescribeJobRunCommandInput;
    constructor(input: DescribeJobRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeJobRunCommandInput, DescribeJobRunCommandOutput>;
    private serialize;
    private deserialize;
}
