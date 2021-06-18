import { __extends } from "tslib";
import { DescribeUserStackAssociationsRequest, DescribeUserStackAssociationsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeUserStackAssociationsCommand,
  serializeAws_json1_1DescribeUserStackAssociationsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p>
 *         <ul>
 *             <li>
 *                <p>The stack name</p>
 *             </li>
 *             <li>
 *                <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeUserStackAssociationsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeUserStackAssociationsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DescribeUserStackAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserStackAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeUserStackAssociationsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUserStackAssociationsCommand = /** @class */ (function (_super) {
  __extends(DescribeUserStackAssociationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeUserStackAssociationsCommand(input) {
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
  DescribeUserStackAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "DescribeUserStackAssociationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeUserStackAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeUserStackAssociationsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeUserStackAssociationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeUserStackAssociationsCommand(input, context);
  };
  DescribeUserStackAssociationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeUserStackAssociationsCommand(output, context);
  };
  return DescribeUserStackAssociationsCommand;
})($Command);
export { DescribeUserStackAssociationsCommand };
//# sourceMappingURL=DescribeUserStackAssociationsCommand.js.map
