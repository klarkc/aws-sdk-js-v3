import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateUsageLimitMessage, UsageLimit } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUsageLimitCommandInput extends CreateUsageLimitMessage {
}
export interface CreateUsageLimitCommandOutput extends UsageLimit, __MetadataBearer {
}
/**
 * <p>Creates a usage limit for a specified Amazon Redshift feature on a cluster.
 *             The usage limit is identified by the returned usage limit identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateUsageLimitCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateUsageLimitCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateUsageLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUsageLimitCommandInput} for command's `input` shape.
 * @see {@link CreateUsageLimitCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUsageLimitCommand extends $Command<CreateUsageLimitCommandInput, CreateUsageLimitCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateUsageLimitCommandInput;
    constructor(input: CreateUsageLimitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUsageLimitCommandInput, CreateUsageLimitCommandOutput>;
    private serialize;
    private deserialize;
}
