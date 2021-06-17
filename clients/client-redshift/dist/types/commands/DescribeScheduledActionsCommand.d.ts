import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeScheduledActionsMessage, ScheduledActionsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeScheduledActionsCommandInput extends DescribeScheduledActionsMessage {
}
export interface DescribeScheduledActionsCommandOutput extends ScheduledActionsMessage, __MetadataBearer {
}
/**
 * <p>Describes properties of scheduled actions.
 *              </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeScheduledActionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeScheduledActionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeScheduledActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScheduledActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledActionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeScheduledActionsCommand extends $Command<DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeScheduledActionsCommandInput;
    constructor(input: DescribeScheduledActionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput>;
    private serialize;
    private deserialize;
}
