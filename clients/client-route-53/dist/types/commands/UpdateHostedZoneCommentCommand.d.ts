import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { UpdateHostedZoneCommentRequest, UpdateHostedZoneCommentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateHostedZoneCommentCommandInput extends UpdateHostedZoneCommentRequest {
}
export interface UpdateHostedZoneCommentCommandOutput extends UpdateHostedZoneCommentResponse, __MetadataBearer {
}
/**
 * <p>Updates the comment for a specified hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateHostedZoneCommentCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateHostedZoneCommentCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new UpdateHostedZoneCommentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateHostedZoneCommentCommandInput} for command's `input` shape.
 * @see {@link UpdateHostedZoneCommentCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateHostedZoneCommentCommand extends $Command<UpdateHostedZoneCommentCommandInput, UpdateHostedZoneCommentCommandOutput, Route53ClientResolvedConfig> {
    readonly input: UpdateHostedZoneCommentCommandInput;
    constructor(input: UpdateHostedZoneCommentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateHostedZoneCommentCommandInput, UpdateHostedZoneCommentCommandOutput>;
    private serialize;
    private deserialize;
}
