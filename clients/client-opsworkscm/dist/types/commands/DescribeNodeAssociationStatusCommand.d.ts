import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { DescribeNodeAssociationStatusRequest, DescribeNodeAssociationStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNodeAssociationStatusCommandInput extends DescribeNodeAssociationStatusRequest {
}
export interface DescribeNodeAssociationStatusCommandOutput extends DescribeNodeAssociationStatusResponse, __MetadataBearer {
}
/**
 * <p>
 *       Returns the current status of an existing association or disassociation request.
 *     </p>
 *          <p>
 *       A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found,
 *       or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DescribeNodeAssociationStatusCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DescribeNodeAssociationStatusCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new DescribeNodeAssociationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNodeAssociationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeNodeAssociationStatusCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNodeAssociationStatusCommand extends $Command<DescribeNodeAssociationStatusCommandInput, DescribeNodeAssociationStatusCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: DescribeNodeAssociationStatusCommandInput;
    constructor(input: DescribeNodeAssociationStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNodeAssociationStatusCommandInput, DescribeNodeAssociationStatusCommandOutput>;
    private serialize;
    private deserialize;
}
