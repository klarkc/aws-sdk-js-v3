import { __extends } from "tslib";
import { DescribeDirectoryConfigsRequest, DescribeDirectoryConfigsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDirectoryConfigsCommand,
  serializeAws_json1_1DescribeDirectoryConfigsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
 *         </p>
 *         <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeDirectoryConfigsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeDirectoryConfigsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DescribeDirectoryConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDirectoryConfigsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectoryConfigsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDirectoryConfigsCommand = /** @class */ (function (_super) {
  __extends(DescribeDirectoryConfigsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeDirectoryConfigsCommand(input) {
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
  DescribeDirectoryConfigsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "DescribeDirectoryConfigsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeDirectoryConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDirectoryConfigsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeDirectoryConfigsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeDirectoryConfigsCommand(input, context);
  };
  DescribeDirectoryConfigsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeDirectoryConfigsCommand(output, context);
  };
  return DescribeDirectoryConfigsCommand;
})($Command);
export { DescribeDirectoryConfigsCommand };
//# sourceMappingURL=DescribeDirectoryConfigsCommand.js.map
