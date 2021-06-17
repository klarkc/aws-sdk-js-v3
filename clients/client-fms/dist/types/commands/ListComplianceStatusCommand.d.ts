import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListComplianceStatusRequest, ListComplianceStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListComplianceStatusCommandInput extends ListComplianceStatusRequest {
}
export interface ListComplianceStatusCommandOutput extends ListComplianceStatusResponse, __MetadataBearer {
}
/**
 * <p>Returns an array of <code>PolicyComplianceStatus</code> objects. Use
 *         <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected
 *       by the specified policy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListComplianceStatusCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListComplianceStatusCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListComplianceStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComplianceStatusCommandInput} for command's `input` shape.
 * @see {@link ListComplianceStatusCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListComplianceStatusCommand extends $Command<ListComplianceStatusCommandInput, ListComplianceStatusCommandOutput, FMSClientResolvedConfig> {
    readonly input: ListComplianceStatusCommandInput;
    constructor(input: ListComplianceStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListComplianceStatusCommandInput, ListComplianceStatusCommandOutput>;
    private serialize;
    private deserialize;
}
