"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePortfolioShareCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Stops sharing the specified portfolio with the specified account or organization
 *          node. Shares to an organization node can only be deleted by the management account of an
 *          organization or by a delegated administrator.</p>
 *          <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeletePortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeletePortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeletePortfolioShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePortfolioShareCommandInput} for command's `input` shape.
 * @see {@link DeletePortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeletePortfolioShareCommand extends smithy_client_1.Command {
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
        const clientName = "ServiceCatalogClient";
        const commandName = "DeletePortfolioShareCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeletePortfolioShareInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeletePortfolioShareOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeletePortfolioShareCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeletePortfolioShareCommand(output, context);
    }
}
exports.DeletePortfolioShareCommand = DeletePortfolioShareCommand;
//# sourceMappingURL=DeletePortfolioShareCommand.js.map