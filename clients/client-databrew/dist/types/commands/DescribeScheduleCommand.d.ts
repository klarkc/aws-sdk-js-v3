import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { DescribeScheduleRequest, DescribeScheduleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeScheduleCommandInput extends DescribeScheduleRequest {
}
export interface DescribeScheduleCommandOutput extends DescribeScheduleResponse, __MetadataBearer {
}
/**
 * <p>Returns the definition of a specific DataBrew schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeScheduleCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeScheduleCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new DescribeScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduleCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeScheduleCommand extends $Command<DescribeScheduleCommandInput, DescribeScheduleCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: DescribeScheduleCommandInput;
    constructor(input: DescribeScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScheduleCommandInput, DescribeScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
