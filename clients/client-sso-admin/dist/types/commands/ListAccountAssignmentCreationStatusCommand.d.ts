import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { ListAccountAssignmentCreationStatusRequest, ListAccountAssignmentCreationStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAccountAssignmentCreationStatusCommandInput extends ListAccountAssignmentCreationStatusRequest {
}
export interface ListAccountAssignmentCreationStatusCommandOutput extends ListAccountAssignmentCreationStatusResponse, __MetadataBearer {
}
/**
 * <p>Lists the status of the AWS account assignment creation requests for a specified SSO
 *        instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListAccountAssignmentCreationStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListAccountAssignmentCreationStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListAccountAssignmentCreationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountAssignmentCreationStatusCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssignmentCreationStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAccountAssignmentCreationStatusCommand extends $Command<ListAccountAssignmentCreationStatusCommandInput, ListAccountAssignmentCreationStatusCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: ListAccountAssignmentCreationStatusCommandInput;
    constructor(input: ListAccountAssignmentCreationStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAccountAssignmentCreationStatusCommandInput, ListAccountAssignmentCreationStatusCommandOutput>;
    private serialize;
    private deserialize;
}
