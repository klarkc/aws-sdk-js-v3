"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListResolverQueryLogConfigAssociationsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists information about associations between Amazon VPCs and query logging configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverQueryLogConfigAssociationsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverQueryLogConfigAssociationsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverQueryLogConfigAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverQueryLogConfigAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListResolverQueryLogConfigAssociationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListResolverQueryLogConfigAssociationsCommand extends smithy_client_1.Command {
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
        const clientName = "Route53ResolverClient";
        const commandName = "ListResolverQueryLogConfigAssociationsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListResolverQueryLogConfigAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListResolverQueryLogConfigAssociationsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand(output, context);
    }
}
exports.ListResolverQueryLogConfigAssociationsCommand = ListResolverQueryLogConfigAssociationsCommand;
//# sourceMappingURL=ListResolverQueryLogConfigAssociationsCommand.js.map