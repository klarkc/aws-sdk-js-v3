import { __extends } from "tslib";
import { DeregisterTypeInput, DeregisterTypeOutput } from "../models/models_0";
import {
  deserializeAws_queryDeregisterTypeCommand,
  serializeAws_queryDeregisterTypeCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Marks an extension or extension version as <code>DEPRECATED</code> in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations.</p>
 *          <p>To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry. </p>
 *          <p>You cannot deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the textensionype itself is deregistered as well and marked as deprecated. </p>
 *          <p>To view the deprecation status of an extension or extension version, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeregisterTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeregisterTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DeregisterTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTypeCommandInput} for command's `input` shape.
 * @see {@link DeregisterTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterTypeCommand = /** @class */ (function (_super) {
  __extends(DeregisterTypeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeregisterTypeCommand(input) {
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
  DeregisterTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DeregisterTypeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeregisterTypeInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterTypeOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeregisterTypeCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDeregisterTypeCommand(input, context);
  };
  DeregisterTypeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDeregisterTypeCommand(output, context);
  };
  return DeregisterTypeCommand;
})($Command);
export { DeregisterTypeCommand };
//# sourceMappingURL=DeregisterTypeCommand.js.map
