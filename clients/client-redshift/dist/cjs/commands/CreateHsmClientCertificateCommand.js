"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHsmClientCertificateCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to
 *             the client's HSM in order to store and retrieve the keys used to encrypt the cluster
 *             databases.</p>
 *         <p>The command returns a public key, which you must store in the HSM. In addition to
 *             creating the HSM certificate, you must create an Amazon Redshift HSM configuration that
 *             provides a cluster the information needed to store and use encryption keys in the HSM.
 *             For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM">Hardware Security Modules</a>
 *             in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateHsmClientCertificateCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateHsmClientCertificateCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateHsmClientCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHsmClientCertificateCommandInput} for command's `input` shape.
 * @see {@link CreateHsmClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateHsmClientCertificateCommand extends smithy_client_1.Command {
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
        const clientName = "RedshiftClient";
        const commandName = "CreateHsmClientCertificateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateHsmClientCertificateMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateHsmClientCertificateResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreateHsmClientCertificateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreateHsmClientCertificateCommand(output, context);
    }
}
exports.CreateHsmClientCertificateCommand = CreateHsmClientCertificateCommand;
//# sourceMappingURL=CreateHsmClientCertificateCommand.js.map