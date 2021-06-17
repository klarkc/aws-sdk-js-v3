"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeHsmClientCertificatesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns information about the specified HSM client certificate. If no certificate
 *             ID is specified, returns information about all the HSM certificates owned by your AWS
 *             customer account.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all HSM client certificates that match any combination of the specified keys and values.
 *             For example, if you have <code>owner</code> and <code>environment</code> for tag keys,
 *             and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates
 *             that have any combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, HSM client certificates
 *             are returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeHsmClientCertificatesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeHsmClientCertificatesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeHsmClientCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHsmClientCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeHsmClientCertificatesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeHsmClientCertificatesCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeHsmClientCertificatesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeHsmClientCertificatesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.HsmClientCertificateMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeHsmClientCertificatesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeHsmClientCertificatesCommand(output, context);
    }
}
exports.DescribeHsmClientCertificatesCommand = DescribeHsmClientCertificatesCommand;
//# sourceMappingURL=DescribeHsmClientCertificatesCommand.js.map