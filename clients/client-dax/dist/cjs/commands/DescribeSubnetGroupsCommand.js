"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeSubnetGroupsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of subnet group descriptions. If a subnet group name is specified,
 *             the list will contain only the description of that group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DescribeSubnetGroupsCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DescribeSubnetGroupsCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DescribeSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeSubnetGroupsCommand extends smithy_client_1.Command {
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
        const clientName = "DAXClient";
        const commandName = "DescribeSubnetGroupsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeSubnetGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeSubnetGroupsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeSubnetGroupsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeSubnetGroupsCommand(output, context);
    }
}
exports.DescribeSubnetGroupsCommand = DescribeSubnetGroupsCommand;
//# sourceMappingURL=DescribeSubnetGroupsCommand.js.map