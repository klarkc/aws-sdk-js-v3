"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportServerCatalogCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gathers a complete list of on-premises servers. Connectors must be installed and
 *             monitoring all servers to import.</p>
 *         <p>This call returns immediately, but might take additional time to retrieve all the
 *             servers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, ImportServerCatalogCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, ImportServerCatalogCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new ImportServerCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportServerCatalogCommandInput} for command's `input` shape.
 * @see {@link ImportServerCatalogCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ImportServerCatalogCommand extends smithy_client_1.Command {
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
        const clientName = "SMSClient";
        const commandName = "ImportServerCatalogCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ImportServerCatalogRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ImportServerCatalogResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ImportServerCatalogCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ImportServerCatalogCommand(output, context);
    }
}
exports.ImportServerCatalogCommand = ImportServerCatalogCommand;
//# sourceMappingURL=ImportServerCatalogCommand.js.map