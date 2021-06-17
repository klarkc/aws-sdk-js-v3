"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseReservedElasticsearchInstanceOfferingCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Allows you to purchase reserved Elasticsearch instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, PurchaseReservedElasticsearchInstanceOfferingCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, PurchaseReservedElasticsearchInstanceOfferingCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new PurchaseReservedElasticsearchInstanceOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseReservedElasticsearchInstanceOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedElasticsearchInstanceOfferingCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PurchaseReservedElasticsearchInstanceOfferingCommand extends smithy_client_1.Command {
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
        const clientName = "ElasticsearchServiceClient";
        const commandName = "PurchaseReservedElasticsearchInstanceOfferingCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PurchaseReservedElasticsearchInstanceOfferingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PurchaseReservedElasticsearchInstanceOfferingResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand(output, context);
    }
}
exports.PurchaseReservedElasticsearchInstanceOfferingCommand = PurchaseReservedElasticsearchInstanceOfferingCommand;
//# sourceMappingURL=PurchaseReservedElasticsearchInstanceOfferingCommand.js.map