import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { ListHsmsRequest, ListHsmsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListHsmsCommandInput extends ListHsmsRequest {
}
export interface ListHsmsCommandOutput extends ListHsmsResponse, __MetadataBearer {
}
/**
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Retrieves the identifiers of all of the HSMs provisioned for the current
 *       customer.</p>
 *          <p>This operation supports pagination with the use of the <code>NextToken</code> member.
 *       If more results are available, the <code>NextToken</code> member of the response contains a
 *       token that you pass in the next call to <code>ListHsms</code> to retrieve the next set of
 *       items.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, ListHsmsCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, ListHsmsCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * const client = new CloudHSMClient(config);
 * const command = new ListHsmsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHsmsCommandInput} for command's `input` shape.
 * @see {@link ListHsmsCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListHsmsCommand extends $Command<ListHsmsCommandInput, ListHsmsCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: ListHsmsCommandInput;
    constructor(input: ListHsmsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHsmsCommandInput, ListHsmsCommandOutput>;
    private serialize;
    private deserialize;
}
