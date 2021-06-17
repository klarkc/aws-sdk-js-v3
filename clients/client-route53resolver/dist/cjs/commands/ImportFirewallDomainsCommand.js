"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportFirewallDomainsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p>
 *          <p>Each domain specification in your domain list must satisfy the following
 * 	requirements: </p>
 *          <ul>
 *             <li>
 *       	        <p>It can optionally start with <code>*</code> (asterisk).</p>
 *       	     </li>
 *             <li>
 *       	        <p>With the exception of the optional starting asterisk, it must only contain
 *       	   the following characters: <code>A-Z</code>, <code>a-z</code>,
 *       	   <code>0-9</code>, <code>-</code> (hyphen).</p>
 *       	     </li>
 *             <li>
 *       	        <p>It must be from 1-255 characters in length. </p>
 *       	     </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ImportFirewallDomainsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ImportFirewallDomainsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ImportFirewallDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportFirewallDomainsCommandInput} for command's `input` shape.
 * @see {@link ImportFirewallDomainsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ImportFirewallDomainsCommand extends smithy_client_1.Command {
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
        const commandName = "ImportFirewallDomainsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ImportFirewallDomainsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ImportFirewallDomainsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ImportFirewallDomainsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ImportFirewallDomainsCommand(output, context);
    }
}
exports.ImportFirewallDomainsCommand = ImportFirewallDomainsCommand;
//# sourceMappingURL=ImportFirewallDomainsCommand.js.map