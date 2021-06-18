import { __extends } from "tslib";
import { DescribeImagePermissionsRequest, DescribeImagePermissionsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeImagePermissionsCommand,
  serializeAws_json1_1DescribeImagePermissionsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeImagePermissionsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeImagePermissionsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DescribeImagePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImagePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeImagePermissionsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeImagePermissionsCommand = /** @class */ (function (_super) {
  __extends(DescribeImagePermissionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeImagePermissionsCommand(input) {
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
  DescribeImagePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "DescribeImagePermissionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeImagePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeImagePermissionsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeImagePermissionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeImagePermissionsCommand(input, context);
  };
  DescribeImagePermissionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeImagePermissionsCommand(output, context);
  };
  return DescribeImagePermissionsCommand;
})($Command);
export { DescribeImagePermissionsCommand };
//# sourceMappingURL=DescribeImagePermissionsCommand.js.map
