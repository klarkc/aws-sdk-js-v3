import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListPrincipalPoliciesRequest, ListPrincipalPoliciesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPrincipalPoliciesCommandInput extends ListPrincipalPoliciesRequest {
}
export interface ListPrincipalPoliciesCommandOutput extends ListPrincipalPoliciesResponse, __MetadataBearer {
}
/**
 * @deprecated
 *
 * <p>Lists the policies attached to the specified principal. If you use an Cognito
 *          identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p>
 *          <p>
 *             <b>Note:</b> This API is deprecated. Please use <a>ListAttachedPolicies</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPrincipalPoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPrincipalPoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListPrincipalPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPrincipalPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPrincipalPoliciesCommand extends $Command<ListPrincipalPoliciesCommandInput, ListPrincipalPoliciesCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListPrincipalPoliciesCommandInput;
    constructor(input: ListPrincipalPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPrincipalPoliciesCommandInput, ListPrincipalPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
