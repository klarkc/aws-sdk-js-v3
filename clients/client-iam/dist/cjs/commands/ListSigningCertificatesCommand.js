"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSigningCertificatesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns information about the signing certificates associated with the specified IAM
 *             user. If none exists, the operation returns an empty list.</p>
 *         <p>Although each user is limited to a small number of signing certificates, you can still
 *             paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 *         <p>If the <code>UserName</code> field is not specified, the user name is determined
 *             implicitly based on the AWS access key ID used to sign the request for this operation.
 *             This operation works for access keys under the AWS account. Consequently, you can use
 *             this operation to manage AWS account root user credentials even if the AWS account
 *             has no associated users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListSigningCertificatesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListSigningCertificatesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListSigningCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSigningCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListSigningCertificatesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListSigningCertificatesCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "IAMClient";
        const commandName = "ListSigningCertificatesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListSigningCertificatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListSigningCertificatesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryListSigningCertificatesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryListSigningCertificatesCommand(output, context);
    }
}
exports.ListSigningCertificatesCommand = ListSigningCertificatesCommand;
//# sourceMappingURL=ListSigningCertificatesCommand.js.map