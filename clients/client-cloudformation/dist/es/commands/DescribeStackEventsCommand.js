import { __extends } from "tslib";
import { DescribeStackEventsInput, DescribeStackEventsOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeStackEventsCommand,
  serializeAws_queryDescribeStackEventsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all stack related events for a specified stack in reverse chronological
 *          order. For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the AWS CloudFormation User Guide.</p>
 *          <note>
 *             <p>You can list events for stacks that have failed to create or have been deleted by
 *             specifying the unique stack identifier (stack ID).</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackEventsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackEventsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackEventsCommandInput} for command's `input` shape.
 * @see {@link DescribeStackEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStackEventsCommand = /** @class */ (function (_super) {
  __extends(DescribeStackEventsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeStackEventsCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  DescribeStackEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DescribeStackEventsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeStackEventsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStackEventsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeStackEventsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeStackEventsCommand(input, context);
  };
  DescribeStackEventsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeStackEventsCommand(output, context);
  };
  return DescribeStackEventsCommand;
})($Command);
export { DescribeStackEventsCommand };
//# sourceMappingURL=DescribeStackEventsCommand.js.map
