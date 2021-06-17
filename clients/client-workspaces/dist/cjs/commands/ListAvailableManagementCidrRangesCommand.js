"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAvailableManagementCidrRangesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use
 *          for the network management interface when you enable Bring Your Own License (BYOL). </p>
 *
 *          <p>This operation can be run only by AWS accounts that are enabled for BYOL. If your account
 *          isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p>
 *
 *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
 *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
 *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ListAvailableManagementCidrRangesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ListAvailableManagementCidrRangesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ListAvailableManagementCidrRangesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAvailableManagementCidrRangesCommandInput} for command's `input` shape.
 * @see {@link ListAvailableManagementCidrRangesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListAvailableManagementCidrRangesCommand extends smithy_client_1.Command {
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
        const clientName = "WorkSpacesClient";
        const commandName = "ListAvailableManagementCidrRangesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListAvailableManagementCidrRangesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListAvailableManagementCidrRangesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListAvailableManagementCidrRangesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListAvailableManagementCidrRangesCommand(output, context);
    }
}
exports.ListAvailableManagementCidrRangesCommand = ListAvailableManagementCidrRangesCommand;
//# sourceMappingURL=ListAvailableManagementCidrRangesCommand.js.map