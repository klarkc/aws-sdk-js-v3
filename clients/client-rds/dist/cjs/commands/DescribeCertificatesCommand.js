"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeCertificatesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the set of CA certificates provided by Amazon RDS for this AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeCertificatesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeCertificatesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificatesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeCertificatesCommand extends smithy_client_1.Command {
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
        const clientName = "RDSClient";
        const commandName = "DescribeCertificatesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeCertificatesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CertificateMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeCertificatesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeCertificatesCommand(output, context);
    }
}
exports.DescribeCertificatesCommand = DescribeCertificatesCommand;
//# sourceMappingURL=DescribeCertificatesCommand.js.map