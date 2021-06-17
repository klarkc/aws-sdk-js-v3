import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeTemplateRequest, DescribeTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTemplateCommandInput extends DescribeTemplateRequest {
}
export interface DescribeTemplateCommandOutput extends DescribeTemplateResponse, __MetadataBearer {
}
/**
 * <p>Describes a template's metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTemplateCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTemplateCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeTemplateCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTemplateCommand extends $Command<DescribeTemplateCommandInput, DescribeTemplateCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeTemplateCommandInput;
    constructor(input: DescribeTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTemplateCommandInput, DescribeTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
