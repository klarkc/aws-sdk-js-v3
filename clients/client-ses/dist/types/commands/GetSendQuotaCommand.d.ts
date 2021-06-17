import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { GetSendQuotaResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSendQuotaCommandInput {
}
export interface GetSendQuotaCommandOutput extends GetSendQuotaResponse, __MetadataBearer {
}
/**
 * <p>Provides the sending limits for the Amazon SES account. </p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetSendQuotaCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetSendQuotaCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new GetSendQuotaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSendQuotaCommandInput} for command's `input` shape.
 * @see {@link GetSendQuotaCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSendQuotaCommand extends $Command<GetSendQuotaCommandInput, GetSendQuotaCommandOutput, SESClientResolvedConfig> {
    readonly input: GetSendQuotaCommandInput;
    constructor(input: GetSendQuotaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSendQuotaCommandInput, GetSendQuotaCommandOutput>;
    private serialize;
    private deserialize;
}
