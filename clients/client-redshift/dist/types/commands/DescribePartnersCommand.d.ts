import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribePartnersInputMessage, DescribePartnersOutputMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePartnersCommandInput extends DescribePartnersInputMessage {
}
export interface DescribePartnersCommandOutput extends DescribePartnersOutputMessage, __MetadataBearer {
}
/**
 * <p>Returns information about the partner integrations defined for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribePartnersCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribePartnersCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribePartnersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePartnersCommandInput} for command's `input` shape.
 * @see {@link DescribePartnersCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePartnersCommand extends $Command<DescribePartnersCommandInput, DescribePartnersCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribePartnersCommandInput;
    constructor(input: DescribePartnersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePartnersCommandInput, DescribePartnersCommandOutput>;
    private serialize;
    private deserialize;
}
